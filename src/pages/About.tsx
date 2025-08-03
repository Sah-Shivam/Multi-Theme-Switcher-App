import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Target, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

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
        return 'text-lg text-gray-600 max-w-3xl mx-auto';
      case 'theme2':
        return 'text-lg text-gray-300 max-w-3xl mx-auto';
      case 'theme3':
        return 'text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md';
      default:
        return 'text-lg text-gray-600 max-w-3xl mx-auto';
    }
  };

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300';
      case 'theme2':
        return 'bg-gray-800 rounded-lg border border-gray-700 p-6 text-center hover:border-gray-600 transition-colors duration-300';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20';
      default:
        return 'bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300';
    }
  };

  const getIconClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'h-12 w-12 text-blue-600 mx-auto mb-4';
      case 'theme2':
        return 'h-12 w-12 text-indigo-400 mx-auto mb-4';
      case 'theme3':
        return 'h-16 w-16 text-pink-600 mx-auto mb-6';
      default:
        return 'h-12 w-12 text-blue-600 mx-auto mb-4';
    }
  };

  const getCardTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-xl font-semibold text-gray-800 mb-3';
      case 'theme2':
        return 'text-xl font-bold text-white mb-3';
      case 'theme3':
        return 'text-2xl font-black text-gray-800 mb-4';
      default:
        return 'text-xl font-semibold text-gray-800 mb-3';
    }
  };

  const getCardTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-600';
      case 'theme2':
        return 'text-gray-300';
      case 'theme3':
        return 'text-gray-700 font-semibold';
      default:
        return 'text-gray-600';
    }
  };

  const getSectionClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-sm p-8 mb-12';
      case 'theme2':
        return 'bg-gray-800 rounded-lg border border-gray-700 p-8 mb-12';
      case 'theme3':
        return 'bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl mb-16';
      default:
        return 'bg-white rounded-lg shadow-sm p-8 mb-12';
    }
  };

  const getSectionTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center';
      case 'theme2':
        return 'text-2xl md:text-3xl font-bold text-white mb-6 text-center';
      case 'theme3':
        return 'text-3xl md:text-4xl font-black text-white mb-8 text-center drop-shadow-lg';
      default:
        return 'text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center';
    }
  };

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize online shopping with innovative theme-based experiences that adapt to user preferences and enhance engagement.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of designers, developers, and product experts passionate about creating exceptional user experiences.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, quality, user-centricity, and continuous improvement drive everything we do at ThemeStore.'
    },
    {
      icon: Heart,
      title: 'Our Commitment',
      description: 'Dedicated to providing secure, accessible, and delightful shopping experiences for customers worldwide.'
    }
  ];

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <h1 className={getTitleClasses()}>
          About ThemeStore
        </h1>
        <p className={getSubtitleClasses()}>
          We're pioneering the future of e-commerce with dynamic, theme-based shopping experiences. 
          Our platform demonstrates how design can fundamentally transform user interaction and engagement, 
          creating personalized journeys that adapt to individual preferences and contexts.
        </p>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={getCardClasses()}>
              <feature.icon className={getIconClasses()} />
              <h3 className={getCardTitleClasses()}>
                {feature.title}
              </h3>
              <p className={getCardTextClasses()}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className={getSectionClasses()}>
        <h2 className={getSectionTitleClasses()}>
          Our Story
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className={getSubtitleClasses()}>
            Founded in 2024, ThemeStore emerged from a simple yet powerful idea: what if online shopping 
            could adapt its entire interface to match user preferences and contexts? Our team of passionate 
            designers and developers set out to create more than just another e-commerce platform.
          </p>
          <br />
          <p className={getSubtitleClasses()}>
            We envisioned a shopping experience that could transform itself - from minimalist and professional 
            for focused buyers, to vibrant and playful for exploratory shoppers, to sophisticated and elegant 
            for luxury seekers. This vision led to the creation of our revolutionary multi-theme system.
          </p>
          <br />
          <p className={getSubtitleClasses()}>
            Today, ThemeStore represents the cutting edge of adaptive user interface design, demonstrating 
            how technology can create more personalized, engaging, and effective digital experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={getSectionClasses()}>
        <h2 className={getSectionTitleClasses()}>
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
              3
            </div>
            <div className={getCardTextClasses()}>
              Unique Themes
            </div>
          </div>
          <div>
            <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
              100%
            </div>
            <div className={getCardTextClasses()}>
              Responsive Design
            </div>
          </div>
          <div>
            <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
              24/7
            </div>
            <div className={getCardTextClasses()}>
              Support Available
            </div>
          </div>
          <div>
            <div className={currentTheme === 'theme3' ? 'text-4xl font-black text-white mb-2' : currentTheme === 'theme2' ? 'text-4xl font-bold text-white mb-2' : 'text-4xl font-bold text-gray-800 mb-2'}>
              ∞
            </div>
            <div className={getCardTextClasses()}>
              Possibilities
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;