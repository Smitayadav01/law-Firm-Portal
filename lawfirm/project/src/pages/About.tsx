import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Scale } from 'lucide-react';
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Firm</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A legacy of excellence in legal services spanning over 25 years.
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
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 1995 by a group of visionary attorneys, LEXFIRM has grown from a small practice to one of the most respected legal firms in the country. Our journey has been defined by a commitment to excellence, integrity, and client service.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25 years, we have expanded our practice areas, opened offices across major cities, and built a team of over 100 legal professionals. Throughout our growth, we have maintained our founding principles and dedication to providing exceptional legal services.
              </p>
              <p className="text-gray-600">
                Today, LEXFIRM stands as a testament to our founders' vision, serving clients ranging from individuals to multinational corporations across diverse industries. Our reputation for excellence continues to be our greatest asset as we look toward the future.
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
                src="https://images.pexels.com/photos/8112656/pexels-photo-8112656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Law firm history"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2 text-primary">25+ Years</h3>
                <p className="text-gray-600">
                  Of excellence and trusted legal services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
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
                title: "Excellence",
                icon: <Award className="h-12 w-12 text-secondary mb-4" />,
                description: "We strive for excellence in every aspect of our work, delivering the highest quality legal services to our clients."
              },
              {
                title: "Integrity",
                icon: <Shield className="h-12 w-12 text-secondary mb-4" />,
                description: "We adhere to the highest ethical standards, operating with transparency, honesty, and accountability."
              },
              {
                title: "Collaboration",
                icon: <Users className="h-12 w-12 text-secondary mb-4" />,
                description: "We work collaboratively with our clients and colleagues, leveraging diverse perspectives to achieve optimal results."
              },
              {
                title: "Innovation",
                icon: <Scale className="h-12 w-12 text-secondary mb-4" />,
                description: "We embrace innovation in our legal strategies and operations, finding creative solutions to complex challenges."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
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

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A timeline of significant milestones in our firm's history.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "1995",
                title: "Foundation",
                description: "LEXFIRM was founded by a group of five attorneys with a vision to provide exceptional legal services."
              },
              {
                year: "2000",
                title: "Expansion",
                description: "Opened our second office in New Delhi and expanded our practice areas to include corporate law and intellectual property."
              },
              {
                year: "2008",
                title: "International Recognition",
                description: "Received our first international recognition and established partnerships with global law firms."
              },
              {
                year: "2015",
                title: "Technology Innovation",
                description: "Pioneered the use of legal technology solutions to enhance client service and case management."
              },
              {
                year: "2020",
                title: "25th Anniversary",
                description: "Celebrated 25 years of excellence and launched our sustainability and pro bono initiatives."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white shadow-md">
                  {index + 1}
                </div>
                <div className={`w-1/2 px-6 py-4 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-primary-light text-white rounded-full">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our firm.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Managing Partner",
                image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 20 years of experience in corporate law, Sarah leads our firm with vision and dedication. She specializes in mergers and acquisitions and has been recognized as a leading attorney in her field."
              },
              {
                name: "Robert Chen",
                role: "Senior Partner",
                image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Robert heads our corporate practice group and brings 15 years of experience in complex corporate transactions. He has advised numerous Fortune 500 companies and startups on legal matters."
              },
              {
                name: "Amanda Peters",
                role: "Head of Litigation",
                image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Amanda leads our litigation practice with expertise in complex commercial disputes. With a track record of successful cases, she brings strategic thinking and thorough preparation to every matter."
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="card group overflow-hidden"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-secondary mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/team" className="btn btn-primary">
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Recognition & Accolades</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by various industry organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2023",
                award: "Top 10 Law Firms in Asia",
                organization: "Legal Excellence Awards",
                description: "Recognized for exceptional service and innovative legal solutions."
              },
              {
                year: "2022",
                award: "Best Corporate Law Firm",
                organization: "National Law Journal",
                description: "Acknowledged for outstanding corporate legal services and client satisfaction."
              },
              {
                year: "2021",
                award: "Excellence in Client Service",
                organization: "International Legal Forum",
                description: "Awarded for our client-centric approach and exceptional service delivery."
              },
              {
                year: "2020",
                award: "Innovation in Legal Practice",
                organization: "Legal Technology Awards",
                description: "Recognized for pioneering the use of technology in legal services."
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-secondary"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{award.award}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                  <div className="px-3 py-1 text-sm font-semibold bg-primary text-white rounded-full">
                    {award.year}
                  </div>
                </div>
                <p className="text-gray-600">{award.description}</p>
              </motion.div>
            ))}
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
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Team</h2>
              <p className="text-gray-300 mb-8">
                We're always looking for talented professionals to join our team. If you're passionate about law and committed to excellence, we'd love to hear from you.
              </p>
              <Link to="/contact" className="btn bg-secondary hover:bg-secondary-light text-white">
                Contact Us About Careers
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;