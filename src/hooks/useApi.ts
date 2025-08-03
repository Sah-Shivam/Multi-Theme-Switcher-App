import { useState, useEffect } from 'react';
import { Product } from '../types';
import { apiRateLimiter, logSecurityEvent } from '../utils/security';

/**
 * Custom hook for fetching products from Fake Store API
 * 
 * Features:
 * - Rate limiting protection
 * - Request timeout handling
 * - Data validation and sanitization
 * - Error handling with user-friendly messages
 * - Loading state management
 * 
 * @returns {Object} Products data, loading state, and error state
 */
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Fetch products with security measures
     * Implements rate limiting, timeout, and data validation
     */
    const fetchProducts = async () => {
      // Rate limiting check
      if (!apiRateLimiter.isAllowed('products-api')) {
        setError('Too many requests. Please wait a moment before trying again.');
        setLoading(false);
        logSecurityEvent('API Rate Limit Exceeded', { endpoint: 'products' });
        return;
      }

      try {
        setLoading(true);
        
        // Secure fetch with timeout and validation
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch('https://fakestoreapi.com/products?limit=8', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          logSecurityEvent('API Request Failed', { 
            status: response.status, 
            statusText: response.statusText 
          });
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: Product[] = await response.json();
        
        // Validate response data structure
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format');
        }
        
        // Sanitize product data
        const sanitizedData = data.map(product => ({
          ...product,
          title: product.title?.substring(0, 100) || 'Unknown Product',
          description: product.description?.substring(0, 500) || '',
          category: product.category?.substring(0, 50) || 'uncategorized',
          price: typeof product.price === 'number' ? Math.max(0, product.price) : 0,
          rating: {
            rate: typeof product.rating?.rate === 'number' ? Math.max(0, Math.min(5, product.rating.rate)) : 0,
            count: typeof product.rating?.count === 'number' ? Math.max(0, product.rating.count) : 0
          }
        }));
        
        setProducts(sanitizedData);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          setError('Request timeout. Please check your connection and try again.');
        } else {
          logSecurityEvent('API Error', { error: err });
        }
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};