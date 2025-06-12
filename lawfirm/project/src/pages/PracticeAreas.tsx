import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, Users, Home, Briefcase, FileText, Gavel, Building } from 'lucide-react';
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
      title: "Criminal Law",
      icon: <Gavel className="h-16 w-16 text-secondary mb-4" />,
      description: "Expert criminal defense representation with strategic approach to protect your rights and interests.",
      services: [
        "Criminal defense and representation",
        "Bail applications and procedures",
        "Criminal appeals and revisions",
        "White-collar crime defense",
        "Investigation and evidence analysis"
      ]
    },
    {
      id: 2,
      title: "Family Law",
      icon: <Users className="h-16 w-16 text-secondary mb-4" />,
      description: "Sensitive and professional handling of family matters with focus on amicable resolutions.",
      services: [
        "Divorce and separation proceedings",
        "Child custody and visitation rights",
        "Matrimonial disputes and settlements",
        "Maintenance and alimony matters",
        "Adoption and guardianship"
      ]
    },
    {
      id: 3,
      title: "Cyber Law",
      icon: <Shield className="h-16 w-16 text-secondary mb-4" />,
      description: "Expert guidance in cyber crimes, data protection, and digital legal matters in the modern age.",
      services: [
        "Cyber crime investigation and defense",
        "Data protection and privacy laws",
        "Online fraud and identity theft",
        "Digital evidence analysis",
        "IT compliance and regulations"
      ]
    },
    {
      id: 4,
      title: "Civil Law",
      icon: <Scale className="h-16 w-16 text-secondary mb-4" />,
      description: "Comprehensive representation in civil matters including property disputes, contractual issues, and civil litigation.",
      services: [
        "Property disputes and title matters",
        "Contract disputes and breach of contract",
        "Civil litigation and appeals",
        "Injunction and restraining orders",
        "Damages and compensation claims"
      ]
    },
    {
      id: 5,
      title: "Property Law",
      icon: <Home className="h-16 w-16 text-secondary mb-4" />,
      description: "Complete legal assistance for all property-related matters including transactions and disputes.",
      services: [
        "Property purchase and sale agreements",
        "Title verification and due diligence",
        "Property registration and documentation",
        "Landlord-tenant disputes",
        "Property development and construction"
      ]
    },
    {
      id: 6,
      title: "Corporate Law",
      icon: <Building className="h-16 w-16 text-secondary mb-4" />,
      description: "Business legal services to help companies navigate regulatory compliance and commercial challenges.",
      services: [
        "Company incorporation and registration",
        "Corporate compliance and governance",
        "Commercial contracts and agreements",
        "Business dispute resolution",
        "Mergers and acquisitions"
      ]
    },
    {
      id: 7,
      title: "Consumer Protection",
      icon: <Shield className="h-16 w-16 text-secondary mb-4" />,
      description: "Advocacy for consumer rights and protection against unfair trade practices and deficient services.",
      services: [
        "Consumer complaint filing",
        "Deficiency in services claims",
        "Product liability cases",
        "Unfair trade practices",
        "Consumer forum representation"
      ]
    },
    {
      id: 8,
      title: "Labour & Employment",
      icon: <Briefcase className="h-16 w-16 text-secondary mb-4" />,
      description: "Comprehensive employment law services for both employers and employees.",
      services: [
        "Employment contracts and policies",
        "Wrongful termination cases",
        "Workplace harassment issues",
        "Labour dispute resolution",
        "Industrial relations"
      ]
    },
    {
      id: 9,
      title: "Documentation Services",
      icon: <FileText className="h-16 w-16 text-secondary mb-4" />,
      description: "Professional legal documentation services for various legal requirements and procedures.",
      services: [
        "Legal notice drafting and service",
        "Agreement and contract drafting",
        "Affidavit and declaration preparation",
        "Power of attorney documentation",
        "Legal opinion and advice"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Practice Areas</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
            <h2 className="text-3xl font-bold mb-4">Our Legal Expertise</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced legal team provides specialized services across multiple practice areas with dedication and professionalism.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="group"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="block p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-primary group-hover:text-secondary transition-colors mb-3">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description.substring(0, 80)}...</p>
                  </div>
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
                <h3 className="text-xl font-bold mb-4">Our Services Include</h3>
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
                  Consult for {area.title}
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
              <h2 className="text-3xl font-bold text-white mb-4">Need Legal Assistance?</h2>
              <p className="text-gray-300 mb-8">
                Our experienced legal team is ready to assist you with your legal challenges. 
                Contact us today to schedule a consultation and discuss your specific requirements.
              </p>
              <Link to="/contact" className="btn bg-secondary hover:bg-secondary-light text-white">
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreas;