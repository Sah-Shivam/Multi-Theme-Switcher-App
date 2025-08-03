import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Product } from '../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

/**
 * Product Card Component
 * 
 * Displays product information with theme-specific styling
 * Features:
 * - Theme-adaptive design
 * - Star rating display
 * - Responsive image loading
 * - Interactive hover effects
 * 
 * @param {Product} product - Product data to display
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  /**
   * Get card container classes based on current theme
   */
  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden';
      case 'theme2':
        return 'bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 overflow-hidden';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-white/20';
      default:
        return 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden';
    }
  };

  const getImageClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full h-48 object-cover';
      case 'theme2':
        return 'w-full h-48 object-cover filter brightness-90';
      case 'theme3':
        return 'w-full h-48 object-cover rounded-t-xl';
      default:
        return 'w-full h-48 object-cover';
    }
  };

  const getContentClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'p-4';
      case 'theme2':
        return 'p-4 text-white';
      case 'theme3':
        return 'p-6 text-gray-800';
      default:
        return 'p-4';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-lg font-semibold text-gray-800 mb-2 line-clamp-2';
      case 'theme2':
        return 'text-lg font-bold text-white mb-2 line-clamp-2';
      case 'theme3':
        return 'text-xl font-black text-gray-800 mb-3 line-clamp-2';
      default:
        return 'text-lg font-semibold text-gray-800 mb-2 line-clamp-2';
    }
  };

  const getPriceClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-2xl font-bold text-blue-600';
      case 'theme2':
        return 'text-2xl font-bold text-indigo-400';
      case 'theme3':
        return 'text-3xl font-black text-pink-600';
      default:
        return 'text-2xl font-bold text-blue-600';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium';
      case 'theme2':
        return 'w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-bold';
      case 'theme3':
        return 'w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-black text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1';
      default:
        return 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium';
    }
  };

  return (
    <div className={getCardClasses()}>
      <img
        src={product.image}
        alt={product.title}
        className={getImageClasses()}
        loading="lazy"
      />
      <div className={getContentClasses()}>
        <h3 className={getTitleClasses()}>
          {product.title}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating.rate)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className={getPriceClasses()}>
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 capitalize">
            {product.category}
          </span>
        </div>

        <button className={getButtonClasses()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}; 

export default ProductCard;