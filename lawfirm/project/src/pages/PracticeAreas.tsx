import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Scale, Award, Users, Briefcase, Book, Building, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const practiceAreas = [
    {
      id: 1,
      title: "Corporate Law",
      icon: <BarChart3 className="h-16 w-16 text-secondary mb-4" />,
      description: "Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to multinational corporations.",
      services: [
        "Corporate governance and compliance",
        "Corporate restructuring",
        "Joint ventures and strategic alliances",
        "Private equity and venture capital",
        "Corporate secretarial services"
      ]
    },
    {
      id: 2,
      title: "Dispute Resolution",
      icon: <Scale className="h-16 w-16 text-secondary mb-4" />,
      description: "Our dispute resolution team has extensive experience in representing clients in litigation, arbitration, and alternative dispute resolution proceedings.",
      services: [
        "Commercial litigation",
        "International arbitration",
        "Mediation and negotiation",
        "White-collar crime defense",
        "Regulatory investigations"
      ]
    },
    {
      id: 3,
      title: "Banking & Finance",
      icon: <Award className="h-16 w-16 text-secondary mb-4" />,
      description: "We advise financial institutions, lenders, borrowers, and investors on a wide range of banking and finance matters.",
      services: [
        "Project finance",
        "Acquisition finance",
        "Asset finance",
        "Financial restructuring",
        "Banking regulation"
      ]
    },
    {
      id: 4,
      title: "Intellectual Property",
      icon: <Book className="h-16 w-16 text-secondary mb-4" />,
      description: "Our intellectual property practice helps clients protect, enforce, and monetize their intellectual property assets.",
      services: [
        "Patent prosecution and litigation",
        "Trademark registration and enforcement",
        "Copyright protection",
        "IP licensing and transactions",
        "Trade secrets protection"
      ]
    },
    {
      id: 5,
      title: "Mergers & Acquisitions",
      icon: <Building className="h-16 w-16 text-secondary mb-4" />,
      description: "We provide strategic guidance on domestic and cross-border mergers, acquisitions, joint ventures, and corporate restructurings.",
      services: [
        "Due diligence",
        "Transaction structuring",
        "Negotiation and documentation",
        "Post-acquisition integration",
        "Regulatory approvals"
      ]
    },
    {
      id: 6,
      title: "Employment Law",
      icon: <Users className="h-16 w-16 text-secondary mb-4" />,
      description: "Our employment law practice advises employers and employees on all aspects of the employment relationship.",
      services: [
        "Employment contracts and policies",
        "Employee benefits and compensation",
        "Labor relations",
        "Employment litigation",
        "Workplace investigations"
      ]
    },
    {
      id: 7,
      title: "Real Estate",
      icon: <Building className="h-16 w-16 text-secondary mb-4" />,
      description: "We provide comprehensive legal services for real estate transactions, development projects, and dispute resolution.",
      services: [
        "Property acquisitions and dispositions",
        "Leasing transactions",
        "Real estate development",
        "Construction contracts",
        "Real estate litigation"
      ]
    },
    {
      id: 8,
      title: "Regulatory Compliance",
      icon: <FileText className="h-16 w-16 text-secondary mb-4" />,
      description: "We help clients navigate complex regulatory environments and ensure compliance with applicable laws and regulations.",
      services: [
        "Regulatory risk assessment",
        "Compliance program development",
        "Regulatory investigations",
        "Licensing and approvals",
        "Regulatory advocacy"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668488/pexels-photo-5668488.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Practice Areas</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal solutions across diverse practice areas to meet your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced attorneys provides specialized legal services across a wide range of practice areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="group"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="block p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-primary group-hover:text-secondary transition-colors">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                  <p className="text-gray-600">{area.description.substring(0, 100)}...</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Practice Areas */}
      {practiceAreas.map((area, index) => (
        <section
          key={area.id}
          id={area.title.toLowerCase().replace(/\s+/g, '-')}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">{area.title}</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <ul className="space-y-3 mb-8">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-gray-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Consult with Our {area.title} Team
                </Link>
              </motion.div>
              
              <motion.div
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={`https://images.pexels.com/photos/${5668467 + index}/pexels-photo-${5668467 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt={area.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
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

export default PracticeAreas;