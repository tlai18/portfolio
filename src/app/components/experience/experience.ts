import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'WEX (Contract)',
      position: 'Software Development Engineer',
      period: 'Nov 2025 – Present',
      description: '',
      technologies: [],
      achievements: []
    },
    {
      company: 'HCI Lab, Tufts University',
      position: 'Technical Research Assistant',
      period: 'September 2024 - February 2025',
      description: 'Redesigned the user interface and overall design of an argument evaluation platform, aiming to improve visual clarity. Leveraged React and data visualization libraries to develop dynamic tools with real-time updates, enhancing argument analysis, evidence integration, and workflows while collaborating with researchers to implement user-centered features.',
      technologies: ['React', 'Data Visualization', 'Node.js', 'Research Tools', 'UI/UX Design'],
      achievements: [
        'Redesigned argument evaluation platform UI for improved visual clarity',
        'Developed dynamic tools with real-time updates for argument analysis',
        'Collaborated with researchers to implement user-centered features',
        'Enhanced evidence integration and workflow processes'
      ]
    },
    {
      company: 'JumboCode, Tufts University',
      position: 'Technical Lead • The Lantern',
      period: 'September 2023 - May 2024',
      description: 'Managed a multi-disciplinary team with Agile methods to deliver user-friendly software applications on a fixed schedule. Led developers\' code reviews thoroughly, ensuring adherence to best practices and alignment with project specifications. Guided the team through all technical and engineering challenges while consistently providing mentorship and resources.',
      technologies: ['Agile Development', 'Team Leadership', 'Code Review', 'Project Management', 'Mentorship'],
      achievements: [
        'Managed multi-disciplinary team using Agile methodologies',
        'Led thorough code reviews ensuring best practices',
        'Guided team through technical challenges and provided mentorship',
        'Delivered user-friendly software applications on schedule'
      ]
    },
    {
      company: 'JumboCode, Tufts University',
      position: 'Front-End Developer • Aaron\'s Presents',
      period: 'September 2022 - May 2023',
      description: 'Created a mobile application using React Native, collaborating with a diverse team of developers, designers, and clients. Built an interactive platform that effectively allows mentors to manage student data, projects, and events for Aaron\'s Presents, a non-profit dedicated to providing valuable resources to young children with ideas that benefit others.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Mobile Development'],
      achievements: [
        'Developed mobile app for non-profit organization',
        'Built interactive platform for mentor data management',
        'Collaborated with diverse team of developers and designers',
        'Created tools for managing student projects and events'
      ]
    },
    {
      company: 'JumboCode, Tufts University',
      position: 'Full-Stack Developer • Simply Smiles',
      period: 'September 2021 - May 2022',
      description: 'Partnered with a skilled team of engineers to successfully develop and deliver a robust, cross-platform web application. Built a comprehensive and advanced digital expense tracking system using the MERN stack for Simply Smiles, a non-profit creating foster home villages where children are raised in supportive communities to achieve their dreams.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
      achievements: [
        'Developed comprehensive expense tracking system',
        'Built robust cross-platform web application',
        'Partnered with skilled engineering team',
        'Delivered solution for non-profit organization'
      ]
    }
  ];

} 