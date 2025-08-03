# Multi-Theme-Switcher-App
🎨 Multi-Theme Switcher App built in React + TypeScript 🌓 Switch between+ localStorage 🌐 API-integrated &amp; multi-page with React Router 3 dynamic themes (Minimalist, Dark Sidebar, Colorful Cards) 📱 Fully responsive + animated transitions 🔒 Theme persistence via Context API  ⚡ Styled with Tailwind + secured &amp; mobile-friendly design

A sophisticated React-based web application featuring dynamic theme switching with three distinct themes, each offering unique layouts, fonts, and user experiences.

## 🚀 Live Demo

Experience the application with three different themes:
- **Theme 1**: Minimalist design with clean layouts
- **Theme 2**: Professional dark mode with sidebar navigation
- **Theme 3**: Vibrant colorful theme with playful typography

## 📋 Features

### Core Functionality
- ✅ **Three Distinct Themes** with complete layout variations
- ✅ **Theme Persistence** using localStorage
- ✅ **React Router** integration (Home, About, Contact)
- ✅ **API Integration** with Fake Store API
- ✅ **Responsive Design** for all devices
- ✅ **Smooth Animations** during theme transitions
- ✅ **TypeScript** implementation
- ✅ **Security Features** with comprehensive protection

### Theme Details

#### Theme 1 - Minimalist
- Clean, light background design
- Modern sans-serif typography (Inter)
- Card-based layout with subtle shadows
- Blue accent colors
- Spacious, breathable design

#### Theme 2 - Dark Professional
- Dark mode with sophisticated color scheme
- Elegant serif typography (Merriweather)
- Sidebar navigation layout
- Indigo accent colors
- Professional, corporate feel

#### Theme 3 - Colorful & Playful
- Vibrant gradient backgrounds
- Playful typography (Pacifico)
- Card-grid layout with glassmorphism effects
- Pink/purple gradient accents
- Fun, engaging user experience

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with custom themes
- **State Management**: React Context API
- **Build Tool**: Vite
- **API**: Fake Store API integration
- **Icons**: Lucide React
- **Security**: CSP, XSS protection, input validation

## 📁 Project Structure

```
multi-theme-switcher/
├── public/
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── ProductCard.tsx
│   ├── context/            # React Context providers
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useApi.ts
│   ├── pages/              # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Home.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── security.ts
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles and theme definitions
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Theme System

The application uses a sophisticated theme system built with React Context API:

### Theme Structure
Each theme defines:
- **Colors**: Background, text, accent colors
- **Typography**: Font families, sizes, weights
- **Layout**: Component structure and spacing
- **Animations**: Transition effects and micro-interactions

### Theme Switching
- Themes are switched via dropdown in the header
- Theme preference persists across browser sessions
- Smooth fade transitions between themes
- All components automatically adapt to the selected theme

## 🔒 Security Features

### Implemented Security Measures
- **Content Security Policy (CSP)** headers
- **XSS Protection** with input sanitization
- **Rate Limiting** for API requests
- **Input Validation** with regex patterns
- **Secure Storage** wrapper for localStorage
- **Error Boundaries** for graceful error handling
- **HTTP Security Headers** (X-Frame-Options, etc.)

### Security Best Practices
- TypeScript for type safety
- Environment variable validation
- Secure API communication
- Protection against common vulnerabilities

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first** approach
- **Flexible grid** layouts
- **Adaptive typography** scaling
- **Touch-friendly** interactions
- **Cross-browser** compatibility

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 API Integration

### Fake Store API
- Fetches product data from `https://fakestoreapi.com/products`
- Implements error handling and loading states
- Rate limiting and timeout protection
- Data validation and sanitization

### Error Handling
- Network error recovery
- Loading state management
- User-friendly error messages
- Retry functionality

## 🧪 Testing & Quality

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Consistent** code formatting
- **Error boundaries** for error handling

### Performance
- **Code splitting** for optimal loading
- **Lazy loading** for images
- **Optimized** bundle size
- **Efficient** re-rendering

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the built files
- **Traditional hosting**: Upload `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

Created as a demonstration of advanced React development with theme switching capabilities.

## 🙏 Acknowledgments

- **Fake Store API** for providing test data
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **React Team** for the amazing framework
