import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Scale, Clock, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gold p-2 rounded-full mr-3">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Seema Vishwakarma & Associates</h3>
                <p className="text-gold text-sm">M.Com., L.L.B.</p>
              </div>
            </div>
            <p className="mb-4 text-gray-300 leading-relaxed">
              High Court Advocates providing professional legal services with integrity and dedication. 
              We combine academic excellence with practical legal experience to deliver effective solutions.
            </p>
            <div className="bg-navy-light p-4 rounded-lg">
              <p className="text-gold font-semibold text-lg">ADVOCATES HIGH COURT</p>
              <p className="text-gray-300 text-sm">Professional Legal Excellence Since Establishment</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0 text-gold" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Office Address</p>
                  <p>Shop No. 2, Rani Apartment, Opp. Bank of India, Next to Dahisar Police Station, Near Petrol Pump, S. V. Road, Dahisar (East), Mumbai - 400068</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0 text-gold" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Phone Numbers</p>
                  <div className="space-y-1">
                    <a href="tel:+919324762845" className="block hover:text-gold transition-colors">
                      +91 9324762845
                    </a>
                    <a href="tel:+919819892886" className="block hover:text-gold transition-colors">
                      +91 9819892886
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0 text-gold" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Email Address</p>
                  <a 
                    href="mailto:seemavish1981@gmail.com" 
                    className="hover:text-gold transition-colors"
                  >
                    seemavish1981@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-3 flex-shrink-0 text-gold" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Business Hours</p>
                  <p>Monday - Saturday<br />9:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-light py-4 border-t border-gold/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Seema Vishwakarma & Associates. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span className="flex items-center">
                <Globe size={14} className="mr-1 text-gold" />
                Professional Legal Services
              </span>
              <span>|</span>
              <span className="flex items-center">
                <Scale size={14} className="mr-1 text-gold" />
                High Court Advocates
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;