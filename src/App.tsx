import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { validateEnvironment } from './utils/security';

/**
 * Main App Component
 * 
 * Root component that sets up:
 * - Error boundary for graceful error handling
 * - Theme provider for theme management
 * - Router for navigation
 * - Layout wrapper for consistent structure
 * - Environment validation for security
 */
function App() {
  // Validate environment on app start
  React.useEffect(() => {
    validateEnvironment();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;