import { Injectable } from '@angular/core';

declare let gtag: Function;

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: Function;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly GA_MEASUREMENT_ID = 'G-0ZZJFH1YWF';

  constructor() {
    // Initialize Google Analytics if not already loaded
    if (typeof gtag === 'undefined') {
      this.loadGoogleAnalytics();
    }
  }

  private loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.GA_MEASUREMENT_ID, {
      page_title: 'Thomas Lai - Software Engineer Portfolio',
      page_location: window.location.href,
      send_page_view: true
    });
  }

  // Track page views
  trackPageView(pageName: string, pagePath: string) {
    if (typeof gtag !== 'undefined') {
      gtag('config', this.GA_MEASUREMENT_ID, {
        page_title: pageName,
        page_location: pagePath,
        send_page_view: true
      });
    }
  }

  // Track custom events
  trackEvent(eventName: string, parameters?: { [key: string]: any }) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  }

  // Track section views
  trackSectionView(sectionName: string) {
    this.trackEvent('section_view', {
      section_name: sectionName,
      page_location: window.location.href
    });
  }

  // Track project interactions
  trackProjectClick(projectName: string, action: 'github' | 'demo' | 'details') {
    this.trackEvent('project_interaction', {
      project_name: projectName,
      action: action,
      page_location: window.location.href
    });
  }

  // Track contact interactions
  trackContactInteraction(method: 'email' | 'linkedin' | 'github' | 'resume_download') {
    this.trackEvent('contact_interaction', {
      contact_method: method,
      page_location: window.location.href
    });
  }

  // Track chatbot interactions
  trackChatbotInteraction(action: 'open' | 'close' | 'message_sent' | 'quick_action') {
    this.trackEvent('chatbot_interaction', {
      chatbot_action: action,
      page_location: window.location.href
    });
  }

  // Track scroll depth
  trackScrollDepth(depth: number) {
    this.trackEvent('scroll_depth', {
      scroll_depth: depth,
      page_location: window.location.href
    });
  }

  // Track time on page
  trackTimeOnPage(timeInSeconds: number) {
    this.trackEvent('time_on_page', {
      time_seconds: timeInSeconds,
      page_location: window.location.href
    });
  }
}
