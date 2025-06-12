import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I book a legal consultation?",
      answer: "You can book a consultation in several ways: 1) Use our online appointment booking system by clicking 'Schedule a Consultation' button, 2) Call us directly at +91 9324762845 or +91 9819892886, 3) Email us at seemavish1981@gmail.com, or 4) Visit our office during business hours (Monday-Saturday, 9:00 AM - 7:00 PM).",
      category: "Consultation"
    },
    {
      id: 2,
      question: "What documents should I bring to my first consultation?",
      answer: "Please bring: 1) Valid photo ID (Aadhaar, PAN, Passport), 2) All relevant documents related to your case, 3) Previous legal correspondence if any, 4) Property documents (for property matters), 5) Financial documents (for corporate/financial matters), 6) Any court notices or legal papers received. We recommend organizing documents chronologically for better case assessment.",
      category: "Consultation"
    },
    // {
    //   id: 3,
    //   question: "How much do you charge for a first consultation?",
    //   answer: "Our consultation fees vary based on the complexity of the matter. Initial consultations typically range from ₹2,000 to ₹5,000. For detailed fee structure, please contact us directly as fees may vary based on the specific legal area and case complexity. We offer transparent pricing with no hidden charges.",
    //   category: "Fees"
    // },
    {
      id: 4,
      question: "What areas of law do you practice?",
      answer: "We practice in multiple areas including Civil Law, Criminal Law, Family Law, Property Law, Corporate Law, Consumer Protection, Labour & Employment Law, and Documentation Services. Our team has extensive experience in High Court matters and complex legal cases.",
      category: "Services"
    },
    {
      id: 5,
      question: "How long does a typical case take to resolve?",
      answer: "Case duration varies significantly based on complexity, court schedules, and case type.",
      category: "Process"
    },
    {
      id: 6,
      question: "Do you handle cases outside Mumbai?",
      answer: "Yes, as High Court Advocates, we can represent clients in various courts across Maharashtra. For cases in other states, we collaborate with local advocates or can appear through proper legal procedures. We assess each case individually to determine the best approach.",
      category: "Services"
    },
    {
      id: 7,
      question: "What is your fee structure for ongoing cases?",
      answer: "Our fees depend on case complexity, time involvement, and court appearances required. We offer various payment structures: fixed fees for specific services, hourly rates for consultations, and retainer arrangements for ongoing matters.",
      category: "Fees"
    },
    {
      id: 8,
      question: "Can I track the progress of my case?",
      answer: "Yes, we provide regular updates through phone calls, emails, and our client portal system. You'll receive updates after each court hearing, significant developments, and document filings. We believe in transparent communication throughout the legal process.",
      category: "Process"
    },
    {
      id: 9,
      question: "Do you provide emergency legal services?",
      answer: "Yes, we understand legal emergencies can arise. For urgent matters like arrests, urgent injunctions, or time-sensitive legal issues, please call us immediately. We strive to provide prompt assistance for genuine emergency situations.",
      category: "Services"
    },
    {
      id: 10,
      question: "What languages do you communicate in?",
      answer: "We communicate fluently in English, Hindi, and Marathi. This helps us serve a diverse client base and ensures clear communication throughout the legal process. All legal documents are prepared in the appropriate language as required by law.",
      category: "Services"
    },
    {
      id: 11,
      question: "How do you ensure confidentiality?",
      answer: "Client confidentiality is paramount. We maintain strict attorney-client privilege, secure document storage, confidential communication channels, and limited access to case information to respective clients.",
      category: "Process"
    },
    {
      id: 12,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash, cheque, bank transfer (NEFT/RTGS), UPI payments, and credit/debit cards. For larger amounts, we prefer bank transfers. Payment receipts are provided for all transactions.",
      category: "Fees"
    }
  ];

  const categories = ['All', 'Consultation', 'Services', 'Fees', 'Process'];

  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-navy">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our legal services, consultation process, and fees.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <span className="bg-gold text-white text-sm font-bold px-2 py-1 rounded-full mt-1">
                      {faq.id}
                    </span>
                    <h3 className="text-lg font-semibold text-navy pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {activeItem === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gold" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gold" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="pl-12">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-3">
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-navy">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our legal team is here to help you with personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919324762845"
                className="btn bg-navy hover:bg-navy/90 text-white"
              >
                Call Us Now
              </a>
              <a
                href="/contact"
                className="btn bg-gold hover:bg-gold/90 text-white"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;