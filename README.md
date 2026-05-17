# Kings University Landing Page

A premium, high-fidelity landing page for Kings University, designed to showcase the institution's academic excellence, global footprint, and modern campus life. Built with Next.js 16 and tailored for a flawless, app-like mobile experience.

## ✨ Key Features

- **Modern & Premium Design**: Features glassmorphism, dynamic gradients, and carefully curated typography (Inter and Plus Jakarta Sans).
- **Responsive Mobile-First Architecture**: Implemented custom Tailwind padding/margin utilities to guarantee perfect layouts across smartphones, tablets, and desktops.
- **Sophisticated Animations**: Uses `framer-motion` for buttery-smooth scroll reveals, parallax images, staggered card entrances, and micro-interactions on hover.
- **Dynamic Interactive Components**:
  - **Animated Navigation**: Sticky mobile-responsive hamburger menu with backdrop blurring.
  - **Campus Life Carousel**: Smooth infinite scrolling image gallery.
  - **Recruiting Partners Marquee**: Auto-playing and responsive corporate partners carousel.
  - **Testimonials Marquee**: Interactive student feedback display.
  - **Animated Statistics Counter**: Automatically counting number tickers triggering on scroll.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Inter & Plus Jakarta Sans)
- **Icons**: Material Symbols Outlined

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nikhilhanumantu/Kings-University.git
   cd Kings-University
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

- `src/app/page.tsx`: The main landing page component containing the hero, global impact, stats, about, programs, and CTA sections.
- `src/app/layout.tsx`: The root application layout, where global fonts and metadata are defined.
- `src/app/globals.css`: Contains the Tailwind CSS configuration, custom CSS variables, and animation keyframes.
- `src/components/`: Reusable, animated UI components.
  - `Navbar.tsx`: Responsive navigation header.
  - `AnimatedElements.tsx`: Wrapper components for Framer Motion interactions (FadeIn, SpotlightCard, ParallaxImage, NumberTicker).
  - `CampusCarousel.tsx`: Image gallery.
  - `PartnersCarousel.tsx`: Responsive recruiting company logos.
  - `TestimonialsMarquee.tsx`: Scrolling reviews.

## ☁️ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply import this repository into your Vercel dashboard and the platform will automatically build and host the application for free. No additional configuration is required!

---
*Developed for optimal speed, beautiful aesthetics, and seamless user experience.*
