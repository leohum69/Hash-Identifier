# Hash Cipher Sight 🔍

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

## 🎯 Overview

**Hash Cipher Sight** is a modern, real-time cryptographic hash identification tool built with React and TypeScript. It provides instant pattern recognition and analysis of various hash types with confidence scoring, making it an essential tool for cybersecurity professionals, developers, and anyone working with cryptographic hashes.

## ✨ Features

### 🔍 **Real-time Hash Identification**
- Instant analysis as you type
- No server-side processing required
- Advanced pattern recognition algorithms

### 🎯 **Comprehensive Hash Support**
- **MD5** - 32 character hexadecimal (128-bit)
- **SHA-1** - 40 character hexadecimal (160-bit)
- **SHA-224** - 56 character hexadecimal (224-bit)
- **SHA-256** - 64 character hexadecimal (256-bit)
- **SHA-384** - 96 character hexadecimal (384-bit)
- **SHA-512** - 128 character hexadecimal (512-bit)
- **bcrypt** - Adaptive hash function with salt
- **NTLM** - Windows authentication hashes
- **Base64** - Encoded string detection

### 🎨 **Modern UI/UX**
- Beautiful dark theme with gradient accents
- Responsive design for all devices
- Smooth animations and transitions
- Copy-to-clipboard functionality
- Toast notifications

### 📊 **Confidence Scoring**
- **High Confidence** - Exact pattern match
- **Medium Confidence** - Likely match with some ambiguity
- **Low Confidence** - Possible match or unknown pattern

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **Bun** package manager (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leohum69/Hash-Identifier.git
   cd Hash-Identifier
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
# Build optimized production bundle
bun run build

# Preview production build locally
bun run preview
```

## 🏗️ Tech Stack

### **Core Framework**
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Lightning-fast build tool

### **UI & Styling**
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Headless, accessible components
- **shadcn/ui** - Beautiful, customizable component library
- **Lucide React** - Beautiful, customizable icons

### **State Management**
- **TanStack Query** - Server state management
- **React Hook Form** - Form state management
- **Zustand** (via hooks) - Client state management

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📂 Project Structure

```
code-cipher-sight/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── HashIdentifier.tsx  # Main hash identification component
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Home page
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and design tokens
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

The application uses a carefully crafted design system with:

- **Dark Theme** - Optimized for extended use
- **Green-Blue Gradient** - Primary brand colors
- **HSL Color System** - Consistent color management
- **Custom Shadows** - Depth and visual hierarchy
- **Smooth Transitions** - Enhanced user experience

### Color Palette
```css
--primary: hsl(142 76% 36%)     /* Green */
--accent: hsl(197 100% 50%)     /* Blue */
--background: hsl(220 27% 6%)   /* Dark background */
--foreground: hsl(220 20% 95%)  /* Light text */
```

## 🔧 Configuration

### Vite Configuration
- **Port**: 8080
- **Host**: "::" (all interfaces)
- **Path Aliases**: `@` → `./src`

### Development Features
- Hot Module Replacement (HMR)
- Component tagging for development
- TypeScript strict mode
- ESLint integration

## 🚀 Deployment

### Build Process
```bash
# Production build
bun run build

# Development build (with source maps)
bun run build:dev
```

### Deployment Options
- **Vercel** - Recommended for React apps
- **Netlify** - Simple static hosting
- **GitHub Pages** - Free hosting for open source
- **Docker** - Containerized deployment

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Radix UI** - For accessible headless components
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icons
