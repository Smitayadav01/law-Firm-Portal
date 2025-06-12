import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BarChart3, Scale, Users, Phone, Mail, MapPin, Shield, Calendar, Clock, Globe } from 'lucide-react';
import AppointmentBooking from '../components/Features/AppointmentBooking';
import LiveChat from '../components/Features/LiveChat';
import Newsletter from '../components/Features/Newsletter';
import CaseTracker from '../components/Features/CaseTracker';
import ClientPortal from '../components/Features/ClientPortal';
import LegalCalculator from '../components/Features/LegalCalculator';
import FAQ from '../components/Features/FAQ';

const Home: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-peacock overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 gradient-peacock"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-gold/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-gold/30 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-gold rounded-full"></div>
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-gold rounded-full"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Symbol */}
            <div className="flex justify-center mb-8">
              <div className="bg-gold p-6 rounded-full shadow-gold-glow">
                <Scale className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif krishna-flute-underline">
              Seema Vishwakarma & Associates
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-gold font-semibold">ADVOCATES HIGH COURT</span><br />
              Expert Legal Solutions with Professional Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="btn bg-gold hover:bg-gold-light text-white flex items-center justify-center space-x-2 hover-lift"
              >
                <Calendar size={20} />
                <span>Schedule a Consultation</span>
              </button>
              <Link to="/practice-areas" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 hover-lift">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-navy-light text-white py-4 border-b border-gold/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold" />
                <a href="tel:+919324762845" className="text-sm hover:text-gold transition-colors">+91 9324762845</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold" />
                <a href="tel:+919819892886" className="text-sm hover:text-gold transition-colors">+91 9819892886</a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-gold" />
              <a href="mailto:seemavish1981@gmail.com" className="text-sm hover:text-gold transition-colors">seemavish1981@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-navy">Our Practice Areas</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive legal services across a wide range of practice areas to meet the diverse needs of our clients.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Criminal Law",
                icon: <Scale className="h-10 w-10 text-gold mb-4" />,
                description: "Comprehensive defense in criminal cases with strategic legal representation."
              },
              {
                title: "Family Law",
                icon: <Users className="h-10 w-10 text-gold mb-4" />,
                description: "Sensitive handling of family matters including divorce, custody, and matrimonial disputes."
              },
              {
                title: "Cyber Law",
                icon: <Shield className="h-10 w-10 text-gold mb-4" />,
                description: "Expert guidance in cyber crimes, data protection, and digital legal matters."
              },
              {
                title: "Civil Law",
                icon: <Scale className="h-10 w-10 text-gold mb-4" />,
                description: "Expert representation in civil matters, property disputes, and contractual issues."
              },
              {
                title: "Property Law",
                icon: <BarChart3 className="h-10 w-10 text-gold mb-4" />,
                description: "Complete legal assistance for property transactions, disputes, and documentation."
              },
              {
                title: "Corporate Law",
                icon: <BarChart3 className="h-10 w-10 text-gold mb-4" />,
                description: "Business legal services including company formation, compliance, and commercial disputes."
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="professional-card p-6 text-center group"
                variants={fadeInUp}
              >
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <Link to="/practice-areas" className="text-gold hover:text-gold-light font-medium inline-flex items-center">
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Firm Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-navy">About Seema Vishwakarma & Associates</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-6">
                Seema Vishwakarma & Associates is a distinguished law firm led by Advocate Seema Vishwakarma, 
                practicing as High Court Advocates with extensive experience in various areas of law.
              </p>
              <p className="text-gray-600 mb-6">
                Our firm is committed to providing exceptional legal services with integrity, professionalism, and dedication. 
                We combine deep legal knowledge with practical experience to deliver effective solutions for our clients.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Award size={20} className="text-gold" />, title: "High Court", subtitle: "Advocates" },
                  { icon: <Users size={20} className="text-gold" />, title: "Expert", subtitle: "Legal Team" },
                  { icon: <BarChart3 size={20} className="text-gold" />, title: "Proven", subtitle: "Track Record" },
                  { icon: <Scale size={20} className="text-gold" />, title: "Multiple", subtitle: "Practice Areas" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-gray-100 p-2 rounded-full mr-3 group-hover:bg-gold/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn bg-navy hover:bg-navy-light text-white hover-lift">
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Law firm office"
                  className="rounded-lg shadow-professional-lg object-cover h-[500px] w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-navy">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional legal services with integrity, professionalism, and unwavering commitment to our clients' success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Sections */}
      <LegalCalculator />
      <CaseTracker />
      <ClientPortal />

      {/* FAQ Section */}
      <FAQ />

      {/* Location & Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-navy">Visit Our Office</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conveniently located in Dahisar (East), Mumbai, our office is easily accessible for consultations and meetings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="professional-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-navy">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-gold/10 p-3 rounded-full mr-4 group-hover:bg-gold/20 transition-colors">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-navy">Office Address</h4>
                      <p className="text-gray-600">
                        Shop No. 2, Rani Apartment, Opp. Bank of India,<br />
                        Next to Dahisar Police Station, Near Petrol Pump,<br />
                        S. V. Road, Dahisar (East), Mumbai - 400068
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gold/10 p-3 rounded-full mr-4 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-navy">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:+919324762845" className="block text-gray-600 hover:text-gold transition-colors">
                          +91 9324762845
                        </a>
                        <a href="tel:+919819892886" className="block text-gray-600 hover:text-gold transition-colors">
                          +91 9819892886
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gold/10 p-3 rounded-full mr-4 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-navy">Email Address</h4>
                      <a 
                        href="mailto:seemavish1981@gmail.com" 
                        className="text-gray-600 hover:text-gold transition-colors"
                      >
                        seemavish1981@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-gold/10 p-3 rounded-full mr-4 group-hover:bg-gold/20 transition-colors">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-navy">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday<br />
                        9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/5668467/pexels-photo-5668467.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Law office consultation"
                className="rounded-lg shadow-professional-lg w-full h-auto hover-lift"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Contact CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gold p-4 rounded-full">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Legal Needs?</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our experienced legal team is ready to assist you with your legal challenges. 
                Schedule a consultation today to discuss how we can help achieve your objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn bg-gold hover:bg-gold-light text-white hover-lift">
                  Contact Us Today
                </Link>
                <button 
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 hover-lift"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Components */}
      <AppointmentBooking 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
      <LiveChat />
    </>
  );
};

export default Home;