# VS Coffee - Corporate Website

A modern, static corporate website for VS Coffee built with React and Tailwind CSS. Features a dark theme inspired by VS Code with smooth animations and a tech-forward design.

## 🎨 Design Features

- **VS Code Dark Theme**: Background `#1e1e1e`, primary accent `#007acc`
- **Typography**: Inter and Poppins fonts for modern readability
- **Animations**: Smooth transitions and fade-ins using Framer Motion
- **Responsive**: Fully responsive design for desktop and mobile
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd corporate_web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Sticky navigation with blur effect
│   ├── Hero.js            # Hero section with animated elements
│   ├── About.js           # Company story and mission
│   ├── Services.js        # Service offerings with cards
│   ├── Gallery.js         # Image gallery with lightbox
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎯 Features

### Navigation
- Sticky header with blur background on scroll
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### Hero Section
- Animated headline with code-inspired elements
- Call-to-action buttons
- Floating code symbols and animations

### About Section
- Company story and mission
- Interactive feature cards
- Animated visual elements

### Services Section
- Four service categories with detailed cards
- Hover animations and interactive elements
- Call-to-action for quotes

### Gallery Section
- Responsive image grid
- Lightbox functionality with navigation
- Smooth hover animations

### Contact Section
- Contact form with validation
- Contact information cards
- Success/error states

### Footer
- Social media links
- Quick navigation
- Copyright and legal links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent design
- **Responsive Design**: Mobile-first approach

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'vs-dark': '#1e1e1e',
  'vs-primary': '#007acc',
  'vs-text': '#d4d4d4',
  'vs-secondary': '#c586c0',
  'vs-accent': '#4ec9b0',
}
```

### Animations
Animations are defined in the Tailwind config and can be customized:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for keyboard users

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Static Hosting

The built files can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@vscoffee.com
- Phone: +1 (555) 123-4567

---

**Brewed with ❤️ by developers who love coffee.**
