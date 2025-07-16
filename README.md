# Harsh Singh - Portfolio Website

🚀 **Live Website:** [portfolio.harshsingh.io](https://portfolio.harshsingh.io)

A modern, responsive portfolio website showcasing my work as a full-stack developer and mobile app expert. Built with React.js and featuring interactive components, smooth animations, and a comprehensive showcase of projects and services.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark color scheme with blue accent colors
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive UI**: Hover effects, button animations, and smooth scrolling

### 📱 Portfolio Showcase
- **Project Gallery**: Interactive portfolio with filtering capabilities (All, Mobile Apps, Web Apps, AI/ML)
- **Live Preview Modal**: Phone mockup container with screenshot slider and video demos
- **Project Details**: Comprehensive project information including challenges, solutions, results, and technologies
- **Mobile Projects**: Dedicated mobile app showcase with slider functionality

### 💼 Professional Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Personal story, technical skills, expertise areas, and professional timeline
- **Services**: Detailed service offerings with pricing and technology stacks
- **Process**: Step-by-step development process explanation
- **Testimonials**: Client testimonials with automatic slider
- **Pricing**: Flexible pricing packages (Starter, Professional, Enterprise)
- **Contact**: Contact form with multiple communication channels

### 🛠️ Advanced Functionality
- **Email Integration**: Contact form with EmailJS integration
- **Intersection Observer**: Scroll-triggered animations for better performance
- **Image Optimization**: Lazy loading and optimized image delivery
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🚀 Tech Stack

### Frontend
- **React.js** (18.2.0) - Main framework
- **React DOM** (18.2.0) - DOM rendering
- **React Icons** (4.12.0) - Icon library
- **React Router DOM** (6.8.0) - Client-side routing

### Styling
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Poppins font family
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Custom keyframe animations

### Tools & Services
- **EmailJS** (3.2.0) - Email service integration
- **React Scripts** (5.0.1) - Build tools and development server
- **Git** - Version control
- **VS Code** - Development environment

### Performance Features
- **Intersection Observer API** - Optimized scroll animations
- **Lazy Loading** - Image optimization
- **Code Splitting** - Component-based architecture
- **Responsive Images** - Multiple resolution support

## 📁 Project Structure

```
freelance-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # Website favicon
│   └── webpreview.webp     # Social media preview image
├── src/
│   ├── components/         # React components
│   │   ├── about/         # About section
│   │   ├── contact/       # Contact form
│   │   ├── footer/        # Footer component
│   │   ├── hero/          # Hero section
│   │   ├── navigation/    # Navigation bar
│   │   ├── portfolio/     # Portfolio showcase
│   │   ├── pricing/       # Pricing plans
│   │   ├── process/       # Development process
│   │   ├── services/      # Services offered
│   │   └── testimonials/  # Client testimonials
│   ├── assets/            # Images and media files
│   │   ├── skills/        # Technology icons
│   │   └── fonts/         # Custom fonts
│   ├── App.jsx            # Main app component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/harshsingh-io/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Open your browser**
Visit `http://localhost:3000` to view the website locally.

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customization

### Colors & Theme
The website uses CSS variables for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --color-bg: #1f1f38;           /* Background */
  --color-primary: #4db5ff;      /* Primary blue */
  --color-accent: #00d4aa;       /* Accent green */
  --color-white: #fff;           /* Text */
  --color-light: rgba(255, 255, 255, 0.6); /* Light text */
}
```

### Content Updates
- **Personal Information**: Update in respective component files
- **Projects**: Modify project data in `Portfolio.jsx` and `MobileProjects.jsx`
- **Services**: Update service offerings in `Services.jsx`
- **Testimonials**: Add/modify client testimonials in `Testimonials.jsx`

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set up:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update the EmailJS configuration in `Contact.jsx`

## 🚀 Deployment

The website is deployed at [portfolio.harshsingh.io](https://portfolio.harshsingh.io) and can be deployed to various platforms:

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📱 Key Features Breakdown

### Interactive Portfolio
- **Filter System**: Filter projects by category (All, Mobile, Web, AI/ML)
- **Live Preview**: Modal with phone mockup for mobile apps
- **Video Integration**: Embedded demo videos via Google Drive
- **Project Details**: Comprehensive case studies with challenges, solutions, and results

### Mobile Projects Showcase
- **Slider Interface**: Horizontal slider for browsing projects
- **Responsive Design**: Adapts to different screen sizes
- **Technology Badges**: Visual representation of tech stack
- **External Links**: GitHub, App Store, and Play Store links

### Professional Sections
- **About Timeline**: Visual timeline of career progression
- **Skills Visualization**: Animated skill bars with percentages
- **Service Packages**: Detailed pricing with feature comparisons
- **Client Testimonials**: Automatic slideshow with company logos

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load as they enter viewport
- **Intersection Observer**: Efficient scroll-triggered animations
- **Optimized Images**: WebP format with fallbacks
- **Minified Assets**: Compressed CSS and JavaScript
- **Font Optimization**: Preloaded Google Fonts

## 🔒 SEO & Meta Tags

- Comprehensive meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data for search engines
- Semantic HTML structure
- Optimized page titles and descriptions

## 📊 Analytics Ready

The website is prepared for analytics integration with:
- Google Analytics support
- Performance monitoring capabilities
- User interaction tracking
- Conversion goal setup

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Harsh Singh**
- Website: [portfolio.harshsingh.io](https://portfolio.harshsingh.io)
- Email: harsh@harshsingh.dev
- LinkedIn: [harshsingh-io](https://linkedin.com/in/harshsingh-io)
- GitHub: [harshsingh-io](https://github.com/harshsingh-io)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Harsh Singh*