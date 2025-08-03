/**
 * Security utilities for input validation and sanitization
 * 
 * This module provides comprehensive security features including:
 * - Input validation with regex patterns
 * - HTML sanitization to prevent XSS
 * - Rate limiting for API requests
 * - Secure localStorage wrapper
 * - Environment validation
 * - Security event logging
 */

// Input validation patterns
export const ValidationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s'-]{1,50}$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
};

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Validate and sanitize form input
 */
export const validateInput = (value: string, type: keyof typeof ValidationPatterns): boolean => {
  if (!value || typeof value !== 'string') return false;
  return ValidationPatterns[type].test(value.trim());
};

/**
 * Sanitize form data
 */
export const sanitizeFormData = (data: Record<string, any>): Record<string, string> => {
  const sanitized: Record<string, string> = {};
  
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      sanitized[key] = sanitizeHtml(data[key].trim());
    }
  });
  
  return sanitized;
};

/**
 * Rate limiting for API calls
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly timeWindow: number;

  constructor(maxRequests: number = 10, timeWindowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the time window
    const validRequests = requests.filter(time => now - time < this.timeWindow);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

export const apiRateLimiter = new RateLimiter();

/**
 * Secure localStorage wrapper
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    if (typeof window === "undefined" || !window.localStorage) return;
    try {
      const sanitizedKey = sanitizeHtml(key);
      const sanitizedValue = sanitizeHtml(value);
      localStorage.setItem(sanitizedKey, sanitizedValue);
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  },

  getItem: (key: string): string | null => {
    if (typeof window === "undefined" || !window.localStorage) return null;
    try {
      const sanitizedKey = sanitizeHtml(key);
      return localStorage.getItem(sanitizedKey);
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    if (typeof window === "undefined" || !window.localStorage) return;
    try {
      const sanitizedKey = sanitizeHtml(key);
      localStorage.removeItem(sanitizedKey);
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
    }
  }
};


// Extend ImportMeta to include env property for Vite and similar environments
interface ImportMetaEnv {
  [key: string]: string | boolean | undefined;
}

declare global {
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

// Helper to get env vars safely (works with Vite and Node)
const getEnv = (key: string): string | undefined => {
  if (typeof import.meta !== "undefined" && import.meta.env && key in import.meta.env) {
    return import.meta.env[key] as string;
  }
  if (typeof process !== "undefined" && process.env && key in process.env) {
    return process.env[key];
  }
  return undefined;
};

/**
 * Environment variable validation
 */

export const validateEnvironment = (): boolean => {
  const requiredVars = ['NODE_ENV'];
  for (const varName of requiredVars) {
    if (!getEnv(varName)) {
      console.warn(`Missing environment variable: ${varName}`);
    }
  }
  return true;
};


/**
 * Error boundary helper
 */
export const logSecurityEvent = (event: string, details?: any): void => {
  if (getEnv('DEV')) {
    console.warn(`Security Event: ${event}`, details);
  }
  // In production, this would send to a logging service
};