import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-gray-50 font-sans min-h-screen';
      case 'theme2':
        return 'bg-gray-900 font-serif min-h-screen text-white';
      case 'theme3':
        return 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 font-mono min-h-screen text-white';
      default:
        return 'bg-gray-50 font-sans min-h-screen';
    }
  };

  const getMainClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'pt-16 flex';
      default:
        return 'pt-16';
    }
  };

  const getSidebarClasses = () => {
    return 'hidden lg:block w-64 bg-gray-800 border-r border-gray-700 min-h-screen pt-8';
  };

  const getContentClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'flex-1 lg:ml-0';
      default:
        return '';
    }
  };

  return (
    <div className={`transition-all duration-300 ${getLayoutClasses()}`}>
      <Header />
      <main className={getMainClasses()}>
        {currentTheme === 'theme2' && (
          <aside className={getSidebarClasses()}>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
              <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  Electronics
                </a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  Clothing
                </a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  Jewelry
                </a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                  Books
                </a>
              </nav>
            </div>
          </aside>
        )}
        <div className={getContentClasses()}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;