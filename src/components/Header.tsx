import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Header Component
 * 
 * Fixed header with navigation and theme selector
 * Features:
 * - Responsive navigation with mobile menu
 * - Theme dropdown selector
 * - Active route highlighting
 * - Theme-specific styling
 */

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themeOptions = [
    { value: 'theme1' as ThemeType, label: 'Minimalist' },
    { value: 'theme2' as ThemeType, label: 'Dark Pro' },
    { value: 'theme3' as ThemeType, label: 'Colorful' },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const getHeaderClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-800';
      case 'theme2':
        return 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 text-white';
      case 'theme3':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg';
      default:
        return 'bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-800';
    }
  };

  const getLogoClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'font-sans font-semibold text-xl';
      case 'theme2':
        return 'font-serif font-bold text-xl';
      case 'theme3':
        return 'font-mono font-bold text-xl';
      default:
        return 'font-sans font-semibold text-xl';
    }
  };

  const getNavLinkClasses = (isActive: boolean) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
    
    switch (currentTheme) {
      case 'theme1':
        return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`;
      case 'theme2':
        return `${baseClasses} ${isActive ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`;
      case 'theme3':
        return `${baseClasses} ${isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`;
      default:
        return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`;
    }
  };

  const getSelectClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white border border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500';
      case 'theme2':
        return 'bg-gray-800 border border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500';
      case 'theme3':
        return 'bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-white focus:border-white';
      default:
        return 'bg-white border border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" />
            <span className={getLogoClasses()}>ThemeStore</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getNavLinkClasses(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Selector */}
          <div className="flex items-center space-x-4">
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value as ThemeType)}
              className={`px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${getSelectClasses()}`}
            >
              {themeOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-white text-gray-800">
                  {option.label}
                </option>
              ))}
            </select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-black/10 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-current/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={getNavLinkClasses(location.pathname === link.path)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;