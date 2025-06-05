import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, you would handle form submission here
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668482/pexels-photo-5668482.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our legal experts for consultation and assistance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="card p-6 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Office Address</h4>
                      <p className="text-gray-600">
                        Shop No. 2, Rani Apartment, Opp. Bank of India, Next to Dahisar Police Station, Near Petrol Pump, S. V. Road, Dahisar (East), Mumbai - 400068
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
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday<br />
                        9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card p-6">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                          {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('message', { required: 'Message is required' })}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full md:w-auto"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2!2d72.8!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;