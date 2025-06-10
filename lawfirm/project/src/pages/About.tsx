import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Scale, BookOpen, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668467/pexels-photo-5668467.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About Our Firm</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional legal excellence with integrity and dedication to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
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
              <p className="text-gray-600 mb-4">
                Seema Vishwakarma & Associates is a distinguished law firm led by Advocate Seema Vishwakarma, 
                who holds qualifications of M.Com., L.L.B. and practices as a High Court Advocate with extensive 
                experience in various areas of law.
              </p>
              <p className="text-gray-600 mb-4">
                Our firm is built on the foundation of providing exceptional legal services with unwavering 
                commitment to our clients. We combine academic excellence with practical legal experience to 
                deliver effective and strategic solutions for complex legal challenges.
              </p>
              <p className="text-gray-600">
                Located in the heart of Dahisar (East), Mumbai, our firm serves clients across Mumbai and 
                surrounding areas, offering comprehensive legal services with a personal touch and professional approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Law firm"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2 text-primary">High Court Advocates</h3>
                <p className="text-gray-600">
                  Professional legal representation with proven expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Professional Qualifications</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our firm is led by qualified professionals with strong academic background and practical experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "M.Com.",
                icon: <BookOpen className="h-12 w-12 text-secondary mb-4" />,
                description: "Master of Commerce degree providing strong foundation in business and commercial law understanding."
              },
              {
                title: "L.L.B.",
                icon: <Gavel className="h-12 w-12 text-secondary mb-4" />,
                description: "Bachelor of Laws degree with comprehensive legal education and jurisprudence knowledge."
              },
              {
                title: "High Court Practice",
                icon: <Scale className="h-12 w-12 text-secondary mb-4" />,
                description: "Authorized to practice before High Court with expertise in complex legal matters and appellate procedures."
              }
            ].map((qualification, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{qualification.icon}</div>
                <h3 className="text-xl font-bold mb-2">{qualification.title}</h3>
                <p className="text-gray-600">{qualification.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our approach to legal practice and our relationships with clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                icon: <Shield className="h-12 w-12 text-secondary mb-4" />,
                description: "We maintain the highest ethical standards in all our professional dealings and client relationships."
              },
              {
                title: "Excellence",
                icon: <Award className="h-12 w-12 text-secondary mb-4" />,
                description: "We strive for excellence in every case, delivering the highest quality legal services to our clients."
              },
              {
                title: "Dedication",
                icon: <Users className="h-12 w-12 text-secondary mb-4" />,
                description: "We are dedicated to our clients' success and work tirelessly to achieve the best possible outcomes."
              },
              {
                title: "Professionalism",
                icon: <Scale className="h-12 w-12 text-secondary mb-4" />,
                description: "We conduct ourselves with the utmost professionalism in all legal proceedings and client interactions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Legal consultation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Firm?</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <div className="space-y-4">
                {[
                  "Experienced High Court Advocates with proven track record",
                  "Comprehensive legal services across multiple practice areas",
                  "Personalized attention and dedicated client service",
                  "Strategic approach to complex legal challenges",
                  "Transparent communication throughout the legal process",
                  "Convenient location in Dahisar (East), Mumbai",
                  "Competitive fees with flexible payment options",
                  "Strong commitment to achieving client objectives"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8111981/pexels-photo-8111981.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-black mb-4">Schedule Your Legal Consultation</h2>
              <p className="text-gray-600 mb-8">
                Contact us today to discuss your legal needs and discover how our experienced team can assist you 
                in achieving your objectives with professional excellence.
              </p>
              <Link to="/contact" className="btn bg-secondary hover:bg-secondary-light text-black">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;