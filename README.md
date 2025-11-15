# Thomas Lai - Portfolio

A minimal, responsive portfolio website built with Angular 20 and Tailwind CSS 4.

## Tech Stack

- Angular 20
- Tailwind CSS 4
- TypeScript
- Angular CLI

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/my-project/browser` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── about/           # About section
│   │   ├── experience/     # Work experience
│   │   ├── projects/       # Project showcase
│   │   ├── contact/         # Contact information
│   │   └── footer/          # Footer
│   ├── services/            # Shared services
│   ├── app.ts               # Main app component
│   └── app.html             # App template
├── assets/                  # Static assets
└── styles.css               # Global styles
```

## Sections

1. Header - Navigation with smooth scrolling and mobile menu
2. Hero - Introduction and call-to-action
3. About - Personal information
4. Experience - Work history and education
5. Projects - Project showcase
6. Contact - Contact information and social links
7. Footer - Copyright information

## Customization

Update component TypeScript files to modify content, projects, and experience.

## Deployment

The project is configured for deployment on Vercel. See `vercel.json` for configuration details.

## License

MIT License

## Contact

- Email: lai.thomas011@gmail.com
- LinkedIn: [Thomas Lai](https://linkedin.com/in/t-lai)
- GitHub: [tlai18](https://github.com/tlai18)
