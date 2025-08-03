import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, ThemeContextType } from '../types';

/**
 * Theme Context
 * 
 * Provides theme state and switching functionality throughout the app
 * Features:
 * - Theme persistence with localStorage
 * - Smooth theme transitions
 * - Security validation for theme values
 */

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


/**
 * Custom hook to use theme context
 * Throws error if used outside of ThemeProvider
 */

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}


/**
 * Theme Provider Component
 * 
 * Manages theme state and provides context to child components
 * Handles theme persistence and validation
 */

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);


  /**
   * Set theme with transition animation
   * Saves theme preference to localStorage
   */
  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentTheme(theme);
      localStorage.setItem('selectedTheme', theme);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <div className={`theme-container ${currentTheme} ${isTransitioning ? 'transitioning' : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};