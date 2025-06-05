import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Sample team data - in a real application, this would come from an API
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Managing Partner",
      practice: "Corporate Law",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah has over 20 years of experience in corporate law and leads our firm with vision and dedication. She specializes in mergers and acquisitions and has been recognized as a leading attorney in her field.",
      education: ["J.D., Harvard Law School", "B.A., Yale University"],
      contact: {
        email: "sarah.johnson@lexfirm.com",
        phone: "+91 22 4079 1001"
      }
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Senior Partner",
      practice: "Corporate Law",
      image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Robert heads our corporate practice group and brings 15 years of experience in complex corporate transactions. He has advised numerous Fortune 500 companies and startups on legal matters.",
      education: ["J.D., Stanford Law School", "B.S., University of California, Berkeley"],
      contact: {
        email: "robert.chen@lexfirm.com",
        phone: "+91 22 4079 1002"
      }
    },
    {
      id: 3,
      name: "Amanda Peters",
      role: "Head of Litigation",
      practice: "Dispute Resolution",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Amanda leads our litigation practice with expertise in complex commercial disputes. With a track record of successful cases, she brings strategic thinking and thorough preparation to every matter.",
      education: ["J.D., Columbia Law School", "B.A., Princeton University"],
      contact: {
        email: "amanda.peters@lexfirm.com",
        phone: "+91 22 4079 1003"
      }
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Partner",
      practice: "Banking & Finance",
      image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael specializes in banking and finance law with expertise in project finance, acquisition finance, and financial restructuring. He has advised major financial institutions and corporations on complex transactions.",
      education: ["J.D., New York University School of Law", "B.S., Georgetown University"],
      contact: {
        email: "michael.rodriguez@lexfirm.com",
        phone: "+91 22 4079 1004"
      }
    },
    {
      id: 5,
      name: "Jennifer Zhang",
      role: "Partner",
      practice: "Intellectual Property",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Jennifer leads our intellectual property practice, specializing in patent law, trademarks, and copyright protection. She has extensive experience in IP litigation and transactional matters.",
      education: ["J.D., University of Chicago Law School", "B.S., Massachusetts Institute of Technology"],
      contact: {
        email: "jennifer.zhang@lexfirm.com",
        phone: "+91 22 4079 1005"
      }
    },
    {
      id: 6,
      name: "David Patel",
      role: "Partner",
      practice: "Mergers & Acquisitions",
      image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "David specializes in mergers and acquisitions, with expertise in cross-border transactions and joint ventures. He has advised on numerous high-profile M&A deals across various industries.",
      education: ["J.D., University of Michigan Law School", "M.B.A., London Business School", "B.Com., University of Delhi"],
      contact: {
        email: "david.patel@lexfirm.com",
        phone: "+91 22 4079 1006"
      }
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Senior Associate",
      practice: "Employment Law",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sophia specializes in employment law, providing guidance on workplace policies, employment contracts, and dispute resolution. She has successfully represented both employers and employees in various cases.",
      education: ["J.D., Georgetown University Law Center", "B.A., Brown University"],
      contact: {
        email: "sophia.martinez@lexfirm.com",
        phone: "+91 22 4079 1007"
      }
    },
    {
      id: 8,
      name: "James Wilson",
      role: "Senior Associate",
      practice: "Real Estate",
      image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James focuses on real estate law, handling complex property transactions, leasing agreements, and real estate litigation. He has advised on major commercial and residential development projects.",
      education: ["J.D., Cornell Law School", "B.S., University of Pennsylvania"],
      contact: {
        email: "james.wilson@lexfirm.com",
        phone: "+91 22 4079 1008"
      }
    }
  ];

  const practices = [
    "All",
    "Corporate Law",
    "Dispute Resolution",
    "Banking & Finance",
    "Intellectual Property",
    "Mergers & Acquisitions",
    "Employment Law",
    "Real Estate"
  ];

  const [selectedPractice, setSelectedPractice] = React.useState("All");
  const [filteredMembers, setFilteredMembers] = React.useState(teamMembers);

  React.useEffect(() => {
    if (selectedPractice === "All") {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(teamMembers.filter(member => member.practice === selectedPractice));
    }
  }, [selectedPractice]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet our talented attorneys and legal professionals dedicated to serving your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Practice Area Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Filter by Practice Area</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {practices.map((practice, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedPractice === practice
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedPractice(practice)}
                >
                  {practice}
                </button>
              ))}
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="card group overflow-hidden"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        <a href={`mailto:${member.contact.email}`} className="bg-white p-2 rounded-full text-primary hover:text-secondary transition-colors">
                          <Mail size={16} />
                        </a>
                        <a href={`tel:${member.contact.phone}`} className="bg-white p-2 rounded-full text-primary hover:text-secondary transition-colors">
                          <Phone size={16} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-primary hover:text-secondary transition-colors">
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-secondary mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.practice}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-6">
                We're always looking for talented legal professionals to join our team. If you're passionate about law and committed to excellence, we'd love to hear from you.
              </p>
              <p className="text-gray-600 mb-6">
                At LEXFIRM, we offer a collaborative work environment, opportunities for professional growth, and a commitment to work-life balance. Our attorneys and staff are our greatest asset, and we invest in their development and success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Collaborative and supportive work environment</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Opportunities for professional growth and development</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Competitive compensation and benefits package</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Commitment to work-life balance and well-being</p>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary">
                View Current Openings
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Law firm team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with our team.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at LEXFIRM provided exceptional legal guidance during our corporate restructuring. Their expertise and strategic approach were invaluable to our success.",
                author: "John Smith",
                position: "CEO, Tech Innovations Inc.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "Working with the intellectual property team at LEXFIRM has been a game-changer for our business. They helped us protect our innovations and navigate complex IP challenges.",
                author: "Emma Johnson",
                position: "Founder, Creative Solutions",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The litigation team at LEXFIRM represented us in a complex commercial dispute with professionalism and dedication. Their strategic approach led to a favorable outcome.",
                author: "Michael Chen",
                position: "CFO, Global Enterprises",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-secondary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9.275C11 13.076 8.599 15 5.599 15c-1.453 0-2.582-.661-3.156-1.553C1.875 12.755 3.5 9.804 6.7 9.053V7.2C3.507 7.909 0 9.507 0 14.341 0 18.427 2.939 20 5.736 20c3.412 0 6.262-2.495 6.262-6.638 0-2.117-.307-3.421-1-4.087zm12 0C23 13.076 20.599 15 17.599 15c-1.453 0-2.582-.661-3.156-1.553-.568-.691 1.057-3.642 4.257-4.393V7.2c-3.193.709-6.7 2.307-6.7 7.141 0 4.086 2.939 5.659 5.736 5.659 3.412 0 6.262-2.495 6.262-6.638 0-2.117-.307-3.421-1-4.087z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;