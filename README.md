# My Professional Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. This website showcases professional experience, skills, book publications, and contact information.

## Technologies Used

- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: React components
- **Lucide React**: Icon library
- **PostCSS**: CSS processing

## Project Structure

```
portfolio/
├── public/
│   ├── images/           # Static images
│   ├── index.html
│   └── staticwebapp.config.json
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── card.jsx  # Card component
│   ├── lib/
│   │   └── utils.js     # Utility functions
│   ├── App.jsx          # Main portfolio component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
```
The site will be available at http://localhost:3000 with hot-reload enabled.

### Production Build

Create an optimized production build:
```bash
npm run build
```
This creates a `build` folder with static files ready for deployment.

### Testing Production Build Locally

To test the production build locally:
```bash
npm install -g serve  # Install serve globally (if not already installed)
serve -s build
```

## Deployment

The site can be deployed to any static hosting service:
- Azure Static Web Apps
- GitHub Pages
- Netlify
- Vercel

## Adding Content

- Place static images in `public/images/`
- Update content in `App.jsx`
- Add resume PDF to `public/` directory

## Customization

- Modify color scheme in `tailwind.config.js`
- Update component styles in respective component files
- Modify layout and content in `App.jsx`

## Maintenance

After making changes:
1. Test locally with `npm start`
2. Build for production with `npm run build`
3. Test production build with `serve -s build`
4. Deploy updated build folder to hosting service