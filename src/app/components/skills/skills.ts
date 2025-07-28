import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend & Mobile',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'React Native', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-700' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      name: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-700' },
        { name: 'Python', level: 82, color: 'from-blue-500 to-purple-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-indigo-600' },
        { name: 'Prisma', level: 78, color: 'from-purple-500 to-pink-500' },
        { name: 'Firebase', level: 80, color: 'from-orange-500 to-yellow-500' }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C++', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'Java', level: 80, color: 'from-orange-500 to-red-500' },
        { name: 'Swift', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'C', level: 70, color: 'from-blue-500 to-blue-600' },
        { name: 'SQL', level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'Shell Scripting', level: 75, color: 'from-green-500 to-green-600' }
      ]
    }
  ];

  additionalTechnologies = [
    'Git', 'Data Structures', 'Machine Learning', 'Cybersecurity', 'iOS Development', 'Algorithms'
  ];

  currentlyLearning = [
    'Advanced ML',
    'AI Applications',
    'System Design'
  ];
} 