# Loopers Studio

A premium digital studio website built with React, TypeScript, and Vite. Features modern scrollytelling animations, glassmorphism effects, and a responsive design system.

## 🚀 Features

- **Scrollytelling Landing Page** - Scroll-driven animations with image sequences
- **Premium Design System** - Consistent UI components with glow effects
- **Responsive Navigation** - Glassmorphism navbar with animated indicator
- **GlowButton Component** - Buttons with rotating gradient borders and hover effects
- **Multi-page Architecture** - Home, Services, Work, Process, About, Contact pages

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Framer Motion** - Animations
- **GSAP + ScrollTrigger** - Scroll Animations
- **React Router** - Routing
- **Tailwind CSS** - Styling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/loopers-studio.git

# Navigate to project
cd loopers-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (GlowButton, Card, etc.)
│   ├── sections/     # Page sections (ProcessSection, CTASection)
│   ├── animations/   # Animation components
│   └── Header.tsx    # Navigation header
├── pages/            # Route pages
├── context/          # React context (Theme)
├── lib/              # Utilities
└── App.tsx           # Main app component
```

## 🎨 Design Tokens

The project uses CSS custom properties for theming:

```css
--accent-primary    /* Primary accent color */
--accent-secondary  /* Secondary accent color */
--greyscale-950     /* Dark background */
```

## 📄 License

MIT License - feel free to use for your projects.

---

Built with ❤️ by Loopers Lab
