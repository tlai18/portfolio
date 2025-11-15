import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;

  navLinks = [
    { label: 'Home', href: '#home', section: 'home' },
    { label: 'About', href: '#about', section: 'about' },
    { label: 'Experience', href: '#experience', section: 'experience' },
    { label: 'Projects', href: '#projects', section: 'projects' }
  ];

  activeSection = 'home';
  menuOpen = false;

  ngOnInit() {
    this.handleScroll = this.handleScroll.bind(this);
    this.updateActiveSection = this.updateActiveSection.bind(this);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.updateActiveSection);
    this.updateActiveSection();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.updateActiveSection);
  }

  handleScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100; // Account for header height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = sections[i];
          break;
        }
        // Also check if we're past the last section
        if (i === sections.length - 1 && scrollPosition >= sectionTop) {
          this.activeSection = sections[i];
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // Prevent body scroll when menu is open
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth >= 1024 ? 80 : window.innerWidth >= 640 ? 72 : 64;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (this.menuOpen) {
      this.menuOpen = false;
      document.body.style.overflow = 'auto';
    }
    
    // Update active section after scroll
    setTimeout(() => {
      this.updateActiveSection();
    }, 100);
  }
} 