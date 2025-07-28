import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  stats = [
    { number: '3.71', label: 'GPA at Tufts' },
    { number: '4+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Project Success' }
  ];
} 