# 🚀 Anirudh Trivedi - Portfolio Website

A modern, professional, and highly animated personal portfolio website for Anirudh Trivedi, showcasing his expertise as an Aspiring Cloud Engineer and Machine Learning enthusiast.

## 🌟 Features

### 🎨 Design & Aesthetics
- **Cloud-Native Theme**: Inspired by Google Cloud Platform, AWS, and Azure interfaces
- **Google Cloud Color Palette**: Clean design using Google's signature colors (#4285F4, #DB4437, #F4B400, #0F9D58)
- **Modern Typography**: Poppins font family for excellent readability
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices

### ✨ Animations & Interactions
- **Animated Profile Photo**: Enhanced clarity with rotating gradient border and hover effects (220px high-resolution)
- **Modern Navigation Bar**: Glassmorphism design with gradient borders, pill-shaped links, and slide-down animation
- **Typewriter Effect**: Dynamic rotating subtitle in the hero section
- **Network Animation**: Animated data nodes and connections in the background
- **Scroll Animations**: Ultra-smooth AOS (Animate On Scroll) effects
- **Interactive Navigation**: Hover effects, active states, and logo click animations
- **Hover Effects**: Interactive cards with satisfying hover animations
- **Parallax Scrolling**: Subtle parallax effect in hero section and navbar
- **Button Ripple Effects**: Material Design-inspired button interactions

### 🔧 Technical Features
- **Pure Vanilla JavaScript**: No framework dependencies for maximum performance
- **Progressive Enhancement**: Works even with JavaScript disabled
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading, throttled scroll events, and optimized animations
- **SEO Friendly**: Semantic HTML structure and meta tags

## 📱 Sections

### 1. Hero Section
- Full-screen introduction with animated background
- **High-Resolution Profile Photo** (220px) with enhanced clarity, filters, and rotating gradient border
- **Modern Navigation Bar** with glassmorphism design and interactive pill-shaped links
- Typewriter effect cycling through professional titles
- Call-to-action buttons with smooth scroll navigation
- Professional bio highlighting key strengths

### 2. Skills & Technologies
Interactive skill cards organized by categories:
- **Cloud & DevOps**: GCP, Cloud Run, Docker, Azure, CI/CD
- **Data Science & ML**: Python, Scikit-learn, Pandas, NumPy, ML
- **Web & Databases**: HTML, CSS, JavaScript, SQL, Git
- **Tools & Platforms**: GitHub, VS Code, Linux, R, Tableau

### 3. Featured Projects
- **Cloud Native Student Performance Prediction**
- **Spam Message Detector** (96% accuracy)
- **Road Accident Dashboard**
- **Dynamic Chatbot**

Each project includes technology tags and GitHub links.

### 4. Experience & Training
Timeline-style layout featuring:
- Data Analyst Traineeship at MedTourEassy
- Google Data Analytics Professional Certificate
- ML Intern at Codsoft
- Web Developer Intern at Codec It Technologies
- Google Cloud DevOps Engineer Training

### 5. Contact Section
- Interactive contact form with mailto functionality
- Professional contact information
- Social media links (LinkedIn, GitHub)
- Location and phone details

## 🛠️ Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript ES6+**: Modern JavaScript with no frameworks
- **External Libraries**:
  - AOS (Animate On Scroll)
  - Font Awesome Icons
  - Google Fonts (Poppins)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🚀 Getting Started

1. **Clone or Download**: Download all files to a local directory
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Optional): For best performance, serve via a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

### Optimization Techniques
- **Throttled Scroll Events**: Prevents performance issues during scrolling
- **Intersection Observer**: Efficient scroll-based animations
- **CSS Variables**: Consistent theming and easy maintenance
- **Preload Critical Resources**: Fonts and icons for faster loading
- **Lazy Loading Ready**: Prepared for future image additions

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Compatible**: Proper ARIA labels and semantic HTML
- **Reduced Motion Support**: Respects user's motion preferences
- **High Contrast Support**: Adapts to high contrast system preferences
- **Focus Indicators**: Clear focus states for all interactive elements

## 🎨 Customization

### Color Scheme
The color palette is defined in CSS custom properties in `styles.css`:
```css
:root {
    --primary-blue: #4285F4;
    --primary-red: #DB4437;
    --primary-yellow: #F4B400;
    --primary-green: #0F9D58;
    /* ... more variables */
}
```

### Content Updates
- **Personal Information**: Update contact details in `index.html`
- **Projects**: Modify project cards in the projects section
- **Skills**: Add or remove skills in the skills section
- **Experience**: Update timeline items in the experience section

### Animation Tweaks
Animation settings can be modified in `script.js`:
```javascript
AOS.init({
    duration: 1000,    // Animation duration
    once: true,        // Animation only once
    offset: 100,       // Trigger offset
    easing: 'ease-out-cubic'
});
```

## 🎮 Easter Eggs

Try the Konami code: `↑ ↑ ↓ ↓ ← → ← → B A` for a fun surprise!

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any interactive behavior in `script.js`
4. Update navigation links if needed

### Adding New Animations
Use AOS attributes for scroll animations:
```html
<div data-aos="fade-up" data-aos-delay="200">Content</div>
```

## 📄 License

This project is created for Anirudh Trivedi's personal portfolio. Feel free to use as inspiration for your own portfolio projects.

## 👨‍💻 Author

**Anirudh Trivedi**
- 📧 Email: anirudhtrivedi3014@gmail.com
- 💼 LinkedIn: [linkedin.com/in/anirudh-ojha-4414b9244](https://linkedin.com/in/anirudh-ojha-4414b9244)
- 🐙 GitHub: [github.com/Ace12Anirudh](https://github.com/Ace12Anirudh)
- 📱 Phone: +91-9039825342
- 📍 Location: Niharika, Korba, Chhattisgarh

---

**Built with ❤️ using HTML, CSS, and JavaScript**
*Designed with a passion for Cloud & Code*
