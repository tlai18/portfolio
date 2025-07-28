import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
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
      name: 'Email',
      icon: 'email',
      url: 'mailto:lai.thomas011@gmail.com',
      color: 'hover:bg-blue-400'
    }
  ];
} 