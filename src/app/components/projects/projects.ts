import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'TTS Firewall Management System',
      description: 'Created a secure web interface for managing firewall rules with a focus on usability and delivering a clean user experience. Added features like dynamic rule modification, real-time updates, and database integration to improve functionality.',
      image: '🛡️',
      technologies: ['React Native', 'Node.js/Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'JumboShare',
      description: 'Spearheaded the successful development of the JumboShare platform prototype to optimize meal swipe usage on campus. Developed a seamless meal swipe exchange feature to facilitate easier and more efficient swap transactions among students.',
      image: '🍽️',
      technologies: ['React Native', 'Node.js/Express', 'MongoDB', 'Heroku'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'FaceTracks',
      description: 'Developed an innovative music recommendation app that uses facial emotion recognition to suggest user-tailored songs. Implemented secure authentication for personalized song selection, ensuring smooth integration of the Spotify API.',
      image: '🎵',
      technologies: ['Affectiva SDK', 'Spotify API', 'HTML/CSS/JS', 'Node.js/Express', 'Heroku'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Aaron\'s Presents Mobile App',
      description: 'Created a mobile application using React Native, collaborating with a diverse team of developers, designers, and clients. Built an interactive platform that effectively allows mentors to manage student data, projects, and events.',
      image: '🎁',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Simply Smiles Expense Tracker',
      description: 'Partnered with a skilled team of engineers to successfully develop and deliver a robust, cross-platform web application. Built a comprehensive and advanced digital expense tracking system using the MERN stack.',
      image: '💰',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Argument Evaluation Platform',
      description: 'Redesigned the user interface and overall design of an argument evaluation platform, aiming to improve visual clarity. Leveraged React and data visualization libraries to develop dynamic tools with real-time updates.',
      image: '📊',
      technologies: ['React', 'Data Visualization', 'Node.js', 'Research Tools'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }

  getOtherProjects() {
    return this.projects.filter(project => !project.featured);
  }
} 