import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Seema Vishwakarma & Associates</h3>
            <p className="mb-4 text-gray-300">
              High Court Advocates with expertise in various areas of law.
            </p>
            <p className="text-gray-300">M.Com., L.L.B.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-secondary transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 text-secondary" />
                <span className="text-gray-300">
                  Shop No. 2, Rani Apartment, Opp. Bank of India, Next to Dahisar Police Station, Near Petrol Pump, S. V. Road, Dahisar (East), Mumbai - 400068
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-secondary" />
                <div className="text-gray-300">
                  <div>+91 9324762845</div>
                  <div>+91 9819892886</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-secondary" />
                <span className="text-gray-300">seemavish1981@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-light py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Seema Vishwakarma & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;