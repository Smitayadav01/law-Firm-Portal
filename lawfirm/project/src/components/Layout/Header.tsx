import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-primary font-serif text-xl md:text-2xl font-bold">Seema Vishwakarma & Associates</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                  location.pathname === item.href 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-secondary bg-gray-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium btn btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;