import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        return 'text-lg text-gray-600 max-w-2xl mx-auto';
      case 'theme2':
        return 'text-lg text-gray-300 max-w-2xl mx-auto';
      case 'theme3':
        return 'text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md';
      default:
        return 'text-lg text-gray-600 max-w-2xl mx-auto';
    }
  };

  const getFormClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-md p-8';
      case 'theme2':
        return 'bg-gray-800 rounded-lg border border-gray-700 p-8';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border-2 border-white/20';
      default:
        return 'bg-white rounded-lg shadow-md p-8';
    }
  };

  const getInputClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200';
      case 'theme2':
        return 'w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200';
      case 'theme3':
        return 'w-full px-4 py-3 border-2 border-pink-300 rounded-full focus:ring-4 focus:ring-pink-200 focus:border-pink-500 transition-all duration-200 text-gray-800 font-semibold';
      default:
        return 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200';
    }
  };

  const getLabelClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'block text-sm font-medium text-gray-700 mb-2';
      case 'theme2':
        return 'block text-sm font-bold text-white mb-2';
      case 'theme3':
        return 'block text-lg font-black text-gray-800 mb-3';
      default:
        return 'block text-sm font-medium text-gray-700 mb-2';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center';
      case 'theme2':
        return 'w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-bold flex items-center justify-center';
      case 'theme3':
        return 'w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-black text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center';
      default:
        return 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center';
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
        return 'h-8 w-8 text-blue-600 mx-auto mb-4';
      case 'theme2':
        return 'h-8 w-8 text-indigo-400 mx-auto mb-4';
      case 'theme3':
        return 'h-10 w-10 text-pink-600 mx-auto mb-4';
      default:
        return 'h-8 w-8 text-blue-600 mx-auto mb-4';
    }
  };

  const getCardTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-lg font-semibold text-gray-800 mb-2';
      case 'theme2':
        return 'text-lg font-bold text-white mb-2';
      case 'theme3':
        return 'text-xl font-black text-gray-800 mb-3';
      default:
        return 'text-lg font-semibold text-gray-800 mb-2';
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@themestore.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9am-6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Innovation St',
      description: 'San Francisco, CA 94105'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Available',
      description: 'We\'re here to help'
    }
  ];

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <h1 className={getTitleClasses()}>
          Get in Touch
        </h1>
        <p className={getSubtitleClasses()}>
          Have questions about our themes or need support? We'd love to hear from you. 
          Reach out and let's start a conversation about how we can help enhance your experience.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Contact Form */}
        <div className={getFormClasses()}>
          <div className="flex items-center mb-6">
            <MessageCircle className={currentTheme === 'theme3' ? 'h-8 w-8 text-pink-600 mr-3' : currentTheme === 'theme2' ? 'h-8 w-8 text-indigo-400 mr-3' : 'h-8 w-8 text-blue-600 mr-3'} />
            <h2 className={currentTheme === 'theme3' ? 'text-2xl font-black text-gray-800' : currentTheme === 'theme2' ? 'text-2xl font-bold text-white' : 'text-2xl font-semibold text-gray-800'}>
              Send us a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={getLabelClasses()}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={getInputClasses()}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={getLabelClasses()}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={getInputClasses()}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={getLabelClasses()}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={getInputClasses()}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="themes">Theme Questions</option>
                <option value="business">Business Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={getLabelClasses()}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={currentTheme === 'theme3' ? getInputClasses().replace('rounded-full', 'rounded-2xl') : getInputClasses()}
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button type="submit" className={getButtonClasses()}>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={getCardClasses()}>
                <info.icon className={getIconClasses()} />
                <h3 className={getCardTitleClasses()}>
                  {info.title}
                </h3>
                <p className={currentTheme === 'theme3' ? 'text-lg font-bold text-gray-800 mb-1' : currentTheme === 'theme2' ? 'text-lg font-semibold text-white mb-1' : 'text-lg font-semibold text-gray-800 mb-1'}>
                  {info.content}
                </p>
                <p className={getCardTextClasses()}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={getFormClasses()}>
        <h2 className={currentTheme === 'theme3' ? 'text-3xl font-black text-gray-800 mb-8 text-center' : currentTheme === 'theme2' ? 'text-3xl font-bold text-white mb-8 text-center' : 'text-3xl font-bold text-gray-800 mb-8 text-center'}>
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className={currentTheme === 'theme3' ? 'text-lg font-black text-gray-800 mb-2' : currentTheme === 'theme2' ? 'text-lg font-bold text-white mb-2' : 'text-lg font-semibold text-gray-800 mb-2'}>
              How do themes work?
            </h3>
            <p className={getCardTextClasses()}>
              Our themes completely transform the layout, colors, fonts, and structure of the entire application, providing distinct user experiences.
            </p>
          </div>
          <div>
            <h3 className={currentTheme === 'theme3' ? 'text-lg font-black text-gray-800 mb-2' : currentTheme === 'theme2' ? 'text-lg font-bold text-white mb-2' : 'text-lg font-semibold text-gray-800 mb-2'}>
              Is my theme choice saved?
            </h3>
            <p className={getCardTextClasses()}>
              Yes! Your theme preference is automatically saved and will persist across browser sessions.
            </p>
          </div>
          <div>
            <h3 className={currentTheme === 'theme3' ? 'text-lg font-black text-gray-800 mb-2' : currentTheme === 'theme2' ? 'text-lg font-bold text-white mb-2' : 'text-lg font-semibold text-gray-800 mb-2'}>
              Are all themes mobile-friendly?
            </h3>
            <p className={getCardTextClasses()}>
              Absolutely! All themes are fully responsive and optimized for mobile, tablet, and desktop devices.
            </p>
          </div>
          <div>
            <h3 className={currentTheme === 'theme3' ? 'text-lg font-black text-gray-800 mb-2' : currentTheme === 'theme2' ? 'text-lg font-bold text-white mb-2' : 'text-lg font-semibold text-gray-800 mb-2'}>
              Can I suggest new themes?
            </h3>
            <p className={getCardTextClasses()}>
              We'd love to hear your ideas! Send us your theme suggestions through the contact form above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;