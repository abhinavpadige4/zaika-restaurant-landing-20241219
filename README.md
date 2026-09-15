# Zaika Indian Restaurant Landing Page

A beautiful, responsive landing page for Zaika Indian Restaurant featuring a rich red and gold theme, complete with menu, chef profiles, testimonials, and booking functionality.

## Features

- **Hero Section**: Stunning full-screen background with tagline and call-to-action
- **Menu Section**: Grid layout showcasing signature dishes with prices
- **About Chefs**: Profiles of master chefs with photos and bios
- **Testimonials**: Customer reviews with star ratings and auto-slider
- **Booking Form**: Functional contact form with validation
- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Rich Theme**: Elegant red (#C1272D) and gold (#FFD700) color scheme
- **Smooth Animations**: Hover effects, transitions, and interactive elements

## Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: CSS Variables, Flexbox, Grid, and custom properties
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Google Fonts**: Playfair Display and Lato for typography

## File Structure

```
zaika-restaurant-landing-20241219/
├── index.html
├── css/
│   ├── style.css          # Main stylesheet with design tokens
│   └── responsive.css     # Media queries for responsive design
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   ├── images/
│   │   ├── hero.jpg       # Hero section background
│   │   ├── menu1-8.jpg    # Menu item images
│   │   ├── chef1-3.jpg    # Chef profile images
│   │   └── testimonial1-4.jpg # Testimonial images
│   └── icons/             # SVG icons (placeholder for now)
└── README.md
```

## Design Tokens

### Colors
- **Primary Red**: `#C1272D`
- **Secondary Gold**: `#FFD700`
- **Dark Text**: `#212121`
- **Light Background**: `#F5F5F5`
- **White**: `#FFFFFF`
- **Gray Light**: `#E0E0E0`

### Fonts
- **Heading**: `'Playfair Display', serif`
- **Body**: `'Lato', sans-serif`

### Spacing
- **Unit**: `8px`
- **Section Padding**: `4rem`
- **Container Max Width**: `1200px`

## Features Implemented

✅ Hero section with tagline and background image  
✅ Menu section listing dishes with prices (8+ items)  
✅ About our chefs section with photos and bios (3 chefs)  
✅ Testimonials section with customer quotes (4+ testimonials)  
✅ Table booking/contact form with validation  
✅ Rich red and gold color theme consistently applied  
✅ Fully responsive layout (mobile, tablet, desktop)  
✅ Mobile navigation toggle (hamburger menu)  
✅ Testimonials auto-slider with navigation  
✅ Form validation for all fields  
✅ Smooth scrolling for anchor links  
✅ Accessible design with proper ARIA labels  
✅ Optimized for performance  

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/zaika-restaurant-landing-20241219.git
   ```

2. Open `index.html` in your browser to view the landing page locally.

3. For development, you can modify the files in:
   - `/css/style.css` - Main styling
   - `/css/responsive.css` - Responsive adjustments
   - `/js/script.js` - Interactive functionality

## Deployment

This site is designed to be deployed on any static hosting service:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Firebase Hosting
- Or any web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Customization

To customize the content:
1. Update menu items in the `.menu-grid` section of `index.html`
2. Modify chef bios in the `.chefs-grid` section
3. Change testimonials in the `.testimonials-slider` section
4. Adjust colors in `css/style.css` using the CSS variables
5. Update images in the `/assets/images/` directory

## Credits

Images used are placeholders and should be replaced with actual restaurant photos for production use.

Fonts are loaded from Google Fonts:
- Playfair Display (for headings)
- Lato (for body text)

## License

This project is open source and available for personal and commercial use.