# ITvexo - Premium 3D Portfolio

This is a modern, high-performance 3D portfolio website built for **Aftab (ITvexo)** using Next.js, React Three Fiber, and Framer Motion.

## Features
- 🚀 **Next.js App Router**: Optimized for performance and SEO.
- 🎨 **3D Interactive Scene**: Floating 3D elements, star background, and mouse parallax.
- ✨ **Glassmorphism UI**: Beautiful, futuristic glass-like components.
- 📱 **Mobile Responsive**: Seamless experience across all devices.
- 🛠️ **Tech Stack**: React Three Fiber, Three.js, Tailwind CSS, Framer Motion.

## Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure
- `src/app`: Next.js App Router pages and global styles.
- `src/components/canvas`: 3D components (Scene, Hero3D, Stars).
- `src/components/sections`: UI sections (Hero, About, Skills, Projects, Contact).
- `src/components/ui`: Common UI elements (Navbar).

## Customization
- To change the 3D model, update `src/components/canvas/Hero3D.tsx`.
- To update your projects, modify the `projects` array in `src/components/sections/Projects.tsx`.
- To update your skills, modify the `skills` array in `src/components/sections/Skills.tsx`.

---
Built with ❤️ by Antigravity for Aftab.
