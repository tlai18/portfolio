import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';
import { SocialLinksService, SocialLink } from '../../services/social-links.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  constructor(private socialLinksService: SocialLinksService) {}

  get socialLinks(): SocialLink[] {
    return this.socialLinksService.getSocialLinks();
  }
} 