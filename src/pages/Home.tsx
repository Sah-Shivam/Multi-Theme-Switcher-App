import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useApi';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Sparkles, Zap } from 'lucide-react';

/**
 * Home Page Component
 * 
 * Main landing page featuring:
 * - Hero section with theme-specific styling
 * - Product grid from API
 * - Statistics section
 * - Responsive design across all themes
 */
const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  /**
   * Theme-specific styling functions
   * Each function returns appropriate CSS classes for the current theme
   */
  const getContainerClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'container mx-auto px-4 py-8';
      case 'theme2':
        return 'container mx-auto px-4 py-8 lg:px-8';
      case 'theme3':
        return 'container mx-auto px-4 py-12';
      default:
        return 'container mx-auto px-4 py-8';
    }
  };

  const getHeroClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-center mb-12 bg-white rounded-lg shadow-sm p-8';
      case 'theme2':
        return 'text-center mb-12 bg-gray-800 rounded-lg border border-gray-700 p-8';
      case 'theme3':
        return 'text-center mb-16 bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl';
      default:
        return 'text-center mb-12 bg-white rounded-lg shadow-sm p-8';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-4xl md:text-5xl font-bold text-gray-800 mb-4';
      case 'theme2':
        return 'text-4xl md:text-5xl font-bold text-white mb-4';
      case 'theme3':
        return 'text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg';
      default:
        return 'text-4xl md:text-5xl font-bold text-gray-800 mb-4';
    }
  };

  const getSubtitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-lg text-gray-600 mb-6 max-w-2xl mx-auto';
      case 'theme2':
        return 'text-lg text-gray-300 mb-6 max-w-2xl mx-auto';
      case 'theme3':
        return 'text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md';
      default:
        return 'text-lg text-gray-600 mb-6 max-w-2xl mx-auto';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium';
      case 'theme2':
        return 'inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-bold';
      case 'theme3':
        return 'inline-flex items-center px-8 py-4 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-200 font-black text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1';
      default:
        return 'inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium';
    }
  };

  const getGridClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'theme2':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'theme3':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  const getSectionTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center';
      case 'theme2':
        return 'text-2xl md:text-3xl font-bold text-white mb-8 text-center';
      case 'theme3':
        return 'text-3xl md:text-4xl font-black text-white mb-12 text-center drop-shadow-lg';
      default:
        return 'text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center';
    }
  };

  const getIcon = () => {
    switch (currentTheme) {
      case 'theme1':
        return <ShoppingBag className="mr-2 h-5 w-5" />;
      case 'theme2':
        return <Zap className="mr-2 h-5 w-5" />;
      case 'theme3':
        return <Sparkles className="mr-2 h-6 w-6" />;
      default:
        return <ShoppingBag className="mr-2 h-5 w-5" />;
    }
  };

  if (loading) {
    return (
      <div className={getContainerClasses()}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-current"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={getContainerClasses()}>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className={getButtonClasses()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <h1 className={getTitleClasses()}>
          Welcome to ThemeStore
        </h1>
        <p className={getSubtitleClasses()}>
          Discover amazing products with our revolutionary multi-theme shopping experience. 
          Switch between themes to see how design can transform your browsing experience.
        </p>
        <button className={getButtonClasses()}>
          {getIcon()}
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section>
        <h2 className={getSectionTitleClasses()}>
          Featured Products
        </h2>
        
        <div className={getGridClasses()}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16">
        <div className={currentTheme === 'theme3' ? 'bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20' : currentTheme === 'theme2' ? 'bg-gray-800 rounded-lg border border-gray-700 p-8' : 'bg-white rounded-lg shadow-sm p-8'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
                10K+
              </div>
              <div className={currentTheme === 'theme3' ? 'text-white/80' : currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}>
                Happy Customers
              </div>
            </div>
            <div>
              <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
                50K+
              </div>
              <div className={currentTheme === 'theme3' ? 'text-white/80' : currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}>
                Products Sold
              </div>
            </div>
            <div>
              <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
                99%
              </div>
              <div className={currentTheme === 'theme3' ? 'text-white/80' : currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;