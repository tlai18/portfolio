import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'lai.thomas011@gmail.com',
      link: 'mailto:lai.thomas011@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '(978) 809-7506',
      link: 'tel:+19788097506'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Boston, MA',
      link: '#'
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/tlai18',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/t-lai',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Tufts Email',
      icon: 'email',
      url: 'mailto:thomas.lai@tufts.edu',
      color: 'hover:bg-blue-400'
    }
  ];

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
} 