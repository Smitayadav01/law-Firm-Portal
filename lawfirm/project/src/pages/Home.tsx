import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BarChart3, Scale, Users } from 'lucide-react';

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
              Expert Legal Solutions for Complex Challenges
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A leading law firm with a distinguished track record of excellence and client success
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
                title: "Corporate Law",
                icon: <BarChart3 className="h-10 w-10 text-secondary mb-4" />,
                description: "Expert advice on corporate governance, regulatory compliance, and commercial transactions."
              },
              {
                title: "Dispute Resolution",
                icon: <Scale className="h-10 w-10 text-secondary mb-4" />,
                description: "Strategic representation in litigation, arbitration, and alternative dispute resolution."
              },
              {
                title: "Banking & Finance",
                icon: <Award className="h-10 w-10 text-secondary mb-4" />,
                description: "Comprehensive advice on banking regulations, project finance, and financial restructuring."
              },
              {
                title: "Intellectual Property",
                icon: <Users className="h-10 w-10 text-secondary mb-4" />,
                description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets."
              },
              {
                title: "Mergers & Acquisitions",
                icon: <BarChart3 className="h-10 w-10 text-secondary mb-4" />,
                description: "Strategic guidance on domestic and cross-border mergers, acquisitions, and joint ventures."
              },
              {
                title: "Employment Law",
                icon: <Users className="h-10 w-10 text-secondary mb-4" />,
                description: "Advice on employment contracts, workplace policies, and dispute resolution."
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
              <h2 className="text-3xl font-bold mb-4">About Our Firm</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 1995, LEXFIRM has established itself as one of the leading law firms with a reputation for providing exceptional legal services to clients across industries.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of highly skilled attorneys combines deep legal knowledge with industry expertise to deliver practical, business-oriented solutions to complex legal challenges.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Award size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">25+</h4>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Users size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">100+</h4>
                    <p className="text-sm text-gray-600">Legal Professionals</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <BarChart3 size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">1000+</h4>
                    <p className="text-sm text-gray-600">Successful Cases</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Scale size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">15+</h4>
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
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted legal advisor, delivering innovative solutions and exceptional client service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced attorneys dedicated to providing exceptional legal services.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Managing Partner",
                image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Robert Chen",
                role: "Senior Partner",
                image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Amanda Peters",
                role: "Corporate Law",
                image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Michael Rodriguez",
                role: "Litigation",
                image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-secondary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/team" className="btn btn-primary">
              View All Team Members
            </Link>
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
                Our team of experienced attorneys is ready to assist you with your legal challenges. 
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