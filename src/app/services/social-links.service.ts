import { Injectable } from '@angular/core';

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService {
  private socialLinks: SocialLink[] = [
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

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }
}
