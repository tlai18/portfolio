import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  isSystemMessage?: boolean;
}

interface QuickAction {
  label: string;
  action: string;
  icon: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class ChatbotComponent implements OnInit {
  isOpen = false;
  messages: Message[] = [];
  newMessage = '';
  isTyping = false;
  showQuickActions = true;
  hasUserInteracted = false;
  
  quickActions: QuickAction[] = [
    { label: 'Download Resume', action: 'resume', icon: '📄' },
    { label: 'View Experience', action: 'experience', icon: '💼' },
    { label: 'See Projects', action: 'projects', icon: '🚀' },
    { label: 'Contact Info', action: 'contact', icon: '📧' },
    { label: 'Availability', action: 'availability', icon: '📅' }
  ];

  recruiterResponses = {
    greeting: [
      "Hello! I'm Thomas's AI assistant. I can help you learn about his background, experience, and availability for opportunities.",
      "Hi there! I'm here to assist you with information about Thomas's professional profile and career background.",
      "Welcome! I can provide details about Thomas's skills, projects, and how to get in touch with him."
    ],
    experience: [
      "Thomas has extensive experience in software development with expertise in Angular, React, Node.js, and cloud technologies. He's worked on both frontend and backend projects.",
      "His background includes full-stack development, with recent focus on modern web technologies and scalable applications.",
      "Thomas brings strong technical skills in JavaScript/TypeScript ecosystems and has experience with agile development methodologies."
    ],
    projects: [
      "Thomas has worked on various projects including web applications, mobile apps, and cloud-based solutions. You can see detailed examples in his portfolio.",
      "His project portfolio includes both personal and professional work, showcasing his skills in modern web development frameworks.",
      "He's built applications ranging from simple websites to complex enterprise solutions, demonstrating versatility in technology choices."
    ],
    contact: [
      "You can reach Thomas via email or LinkedIn. He's typically responsive within 24 hours and prefers email for initial contact.",
      "For professional inquiries, email is the best way to reach him. He's also active on LinkedIn for networking.",
      "Thomas is open to discussing opportunities and can be contacted through the information provided in his contact section."
    ],
    availability: [
      "Thomas is currently open to new opportunities and is available for interviews and discussions about potential roles.",
      "He's actively seeking new challenges and is available for both full-time and contract positions.",
      "Thomas is interested in hearing about opportunities that align with his skills in software development and technology leadership."
    ],
    general: [
      "I'd be happy to provide more specific information about Thomas's background. What would you like to know more about?",
      "Feel free to ask about his technical skills, project experience, or availability for opportunities.",
      "Is there a particular aspect of Thomas's profile you'd like me to elaborate on?",
      "I can help you understand how Thomas's experience might fit your organization's needs."
    ]
  };

  ngOnInit() {
    // Add welcome message
    this.addBotMessage("Hello! I'm Thomas's AI assistant. I can help you learn about his background, experience, and availability for opportunities. How can I assist you today?");
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    
    // Reset quick actions when opening chat for the first time
    if (this.isOpen && !this.hasUserInteracted) {
      this.showQuickActions = true;
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.addUserMessage(this.newMessage);
      this.newMessage = '';
      this.hasUserInteracted = true;
      this.showQuickActions = false; // Hide after first user message
      this.simulateBotResponse();
    }
  }

  addUserMessage(text: string) {
    this.messages.push({
      text,
      isUser: true,
      timestamp: new Date()
    });
  }

  addBotMessage(text: string) {
    this.messages.push({
      text,
      isUser: false,
      timestamp: new Date()
    });
  }

  simulateBotResponse() {
    this.isTyping = true;
    
    setTimeout(() => {
      this.isTyping = false;
      const response = this.getRecruiterResponse(this.messages[this.messages.length - 1].text.toLowerCase());
      this.addBotMessage(response);
    }, 1500);
  }

  getRecruiterResponse(message: string): string {
    // Check for specific keywords and provide relevant responses
    if (message.includes('experience') || message.includes('background') || message.includes('work history')) {
      return this.getRandomResponse(this.recruiterResponses.experience);
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return this.getRandomResponse(this.recruiterResponses.projects);
    } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return this.getRandomResponse(this.recruiterResponses.contact);
    } else if (message.includes('available') || message.includes('hiring') || message.includes('opportunity') || message.includes('job')) {
      return this.getRandomResponse(this.recruiterResponses.availability);
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return this.getRandomResponse(this.recruiterResponses.greeting);
    } else {
      return this.getRandomResponse(this.recruiterResponses.general);
    }
  }

  getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleQuickAction(action: string) {
    this.hasUserInteracted = true;
    this.showQuickActions = false;
    
    switch (action) {
      case 'resume':
        this.addSystemMessage("📄 Downloading Thomas's resume...");
        this.downloadResume();
        break;
      case 'experience':
        this.addBotMessage(this.getRandomResponse(this.recruiterResponses.experience));
        break;
      case 'projects':
        this.addBotMessage(this.getRandomResponse(this.recruiterResponses.projects));
        break;
      case 'contact':
        this.addBotMessage(this.getRandomResponse(this.recruiterResponses.contact));
        break;
      case 'availability':
        this.addBotMessage(this.getRandomResponse(this.recruiterResponses.availability));
        break;
    }
  }

  addSystemMessage(text: string) {
    this.messages.push({
      text,
      isUser: false,
      timestamp: new Date(),
      isSystemMessage: true
    });
  }

  downloadResume() {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/Thomas_Lai_Resume.pdf';
    link.download = 'Thomas_Lai_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      this.addBotMessage("✅ Resume downloaded! Feel free to ask me any questions about Thomas's background or experience.");
    }, 1000);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    // ESC key to close chat
    if (event.key === 'Escape' && this.isOpen) {
      this.toggleChat();
    }
  }

  autoResize(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
  }
}
