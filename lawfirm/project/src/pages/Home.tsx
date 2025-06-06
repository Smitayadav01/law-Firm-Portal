import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BarChart3, Scale, Users, Phone, Mail, MapPin, Shield } from 'lucide-react';

const Home: React.FC = () => {
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
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Seema Vishwakarma & Associates
            </h1>
            <p className="text-2xl text-secondary mb-2 font-semibold">
              M.Com., L.L.B.
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advocates High Court - Expert Legal Solutions with Professional Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-secondary hover:bg-secondary-light text-white">
                Schedule a Consultation
              </Link>
              <Link to="/practice-areas" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gray-900 text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary" />
                <span className="text-sm">+91 9324762845</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary" />
                <span className="text-sm">+91 9819892886</span>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-secondary" />
              <span className="text-sm">seemavish1981@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Practice Areas</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
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
                title: "Civil Law",
                icon: <Scale className="h-10 w-10 text-secondary mb-4" />,
                description: "Expert representation in civil matters, property disputes, and contractual issues."
              },
              {
                title: "Criminal Law",
                icon: <Award className="h-10 w-10 text-secondary mb-4" />,
                description: "Comprehensive defense in criminal cases with strategic legal representation."
              },
              {
                title: "Family Law",
                icon: <Users className="h-10 w-10 text-secondary mb-4" />,
                description: "Sensitive handling of family matters including divorce, custody, and matrimonial disputes."
              },
              {
                title: "Property Law",
                icon: <BarChart3 className="h-10 w-10 text-secondary mb-4" />,
                description: "Complete legal assistance for property transactions, disputes, and documentation."
              },
              {
                title: "Corporate Law",
                icon: <BarChart3 className="h-10 w-10 text-secondary mb-4" />,
                description: "Business legal services including company formation, compliance, and commercial disputes."
              },
              {
                title: "Consumer Protection",
                icon: <Shield className="h-10 w-10 text-secondary mb-4" />,
                description: "Advocacy for consumer rights and protection against unfair trade practices."
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                variants={fadeInUp}
              >
                <div className="flex justify-center">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
                <Link to="/practice-areas" className="mt-4 inline-block text-secondary hover:text-accent font-medium">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Firm Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">About Seema Vishwakarma & Associates</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Seema Vishwakarma & Associates is a distinguished law firm led by Advocate Seema Vishwakarma, M.Com., L.L.B., 
                practicing as High Court Advocates with extensive experience in various areas of law.
              </p>
              <p className="text-gray-600 mb-6">
                Our firm is committed to providing exceptional legal services with integrity, professionalism, and dedication. 
                We combine deep legal knowledge with practical experience to deliver effective solutions for our clients.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Award size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">High Court</h4>
                    <p className="text-sm text-gray-600">Advocates</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Users size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Expert</h4>
                    <p className="text-sm text-gray-600">Legal Team</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <BarChart3 size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Proven</h4>
                    <p className="text-sm text-gray-600">Track Record</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Scale size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Multiple</h4>
                    <p className="text-sm text-gray-600">Practice Areas</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
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
                  className="rounded-lg shadow-lg object-cover h-[500px] w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional legal services with integrity, professionalism, and unwavering commitment to our clients' success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
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
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Office Address</h4>
                      <p className="text-gray-600">
                        Shop No. 2, Rani Apartment, Opp. Bank of India,<br />
                        Next to Dahisar Police Station, Near Petrol Pump,<br />
                        S. V. Road, Dahisar (East), Mumbai - 400068
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:+919324762845" className="block text-gray-600 hover:text-primary">
                          +91 9324762845
                        </a>
                        <a href="tel:+919819892886" className="block text-gray-600 hover:text-primary">
                          +91 9819892886
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Email Address</h4>
                      <a 
                        href="mailto:seemavish1981@gmail.com" 
                        className="text-gray-600 hover:text-primary"
                      >
                        seemavish1981@gmail.com
                      </a>
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
                src="https://images.pexels.com/photos/5668482/pexels-photo-5668482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Law office consultation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Legal Needs?</h2>
              <p className="text-gray-300 mb-8">
                Our experienced legal team is ready to assist you with your legal challenges. 
                Schedule a consultation today to discuss how we can help.
              </p>
              <Link to="/contact" className="btn bg-secondary hover:bg-secondary-light text-white">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;