# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)

1. **Build the project:**
   ```bash
   npm run build:prod
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `dist/my-project/browser` folder to [Netlify](https://netlify.com)
   - Or connect your GitHub repository for automatic deployments

3. **Custom domain:**
   - Add your custom domain in Netlify settings
   - Update DNS records as instructed

### 2. Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live!**

### 3. GitHub Pages

1. **Build the project:**
   ```bash
   npm run build:prod
   ```

2. **Create a GitHub repository and push your code**

3. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select source: Deploy from a branch
   - Choose `main` branch and `/docs` folder
   - Copy build output to `/docs` folder

### 4. Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build:prod
   firebase deploy
   ```

## 🔧 Environment Setup

### Production Build

```bash
# Clean build
npm run clean
npm run build:prod

# Test production build locally
npm run serve:prod
```

### Environment Variables

Create a `.env` file for any environment-specific variables:

```env
# Example environment variables
API_URL=https://api.yoursite.com
ANALYTICS_ID=your-google-analytics-id
```

## 📱 Performance Optimization

### Before Deployment

1. **Optimize images:**
   - Use WebP format where possible
   - Compress images using tools like TinyPNG
   - Implement lazy loading for images

2. **Enable compression:**
   - Enable gzip compression on your hosting provider
   - Use CDN for static assets

3. **Cache strategy:**
   - Set appropriate cache headers for static assets
   - Use service workers for offline functionality

### Performance Monitoring

- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

## 🔒 Security Considerations

1. **HTTPS:**
   - Ensure your hosting provider supports HTTPS
   - Redirect HTTP to HTTPS

2. **Content Security Policy:**
   - Add CSP headers to prevent XSS attacks
   - Restrict resource loading to trusted sources

3. **Regular updates:**
   - Keep dependencies updated
   - Monitor for security vulnerabilities

## 📊 Analytics Setup

### Google Analytics 4

1. Create a GA4 property
2. Add the tracking code to `index.html`
3. Configure goals and events

### Other Options

- **Plausible Analytics** (Privacy-focused)
- **Fathom Analytics** (GDPR compliant)
- **Simple Analytics** (Lightweight)

## 🚨 Troubleshooting

### Common Issues

1. **404 errors on refresh:**
   - Configure your hosting provider for SPA routing
   - Add a `_redirects` file (Netlify) or `vercel.json` (Vercel)

2. **Build failures:**
   - Check Node.js version compatibility
   - Clear cache: `npm run clean`
   - Update dependencies: `npm update`

3. **Performance issues:**
   - Optimize bundle size
   - Enable code splitting
   - Use lazy loading for components

### Support

For deployment issues, check:
- Hosting provider documentation
- Angular deployment guides
- Community forums and Stack Overflow

---

**Happy Deploying! 🎉** 