import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
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
        scrolled ? 'bg-white shadow-professional py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover-lift">
            <div className="flex items-center">
              <div className="bg-navy p-2 rounded-full mr-3">
                <Scale className="h-6 w-6 text-gold" />
              </div>
              <div>
                <span className={`font-serif text-lg md:text-xl font-bold block leading-tight transition-colors ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}>
                  Seema Vishwakarma & Associates
                </span>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-gold relative group ${
                  location.pathname === item.href 
                    ? 'text-gold' 
                    : scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn bg-gold hover:bg-gold-light text-white"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className={`transition-colors hover:text-gold focus:outline-none ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-professional-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-gold bg-gray-50'
                    : 'text-navy hover:bg-gray-50 hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium btn bg-gold hover:bg-gold-light text-white mt-4"
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