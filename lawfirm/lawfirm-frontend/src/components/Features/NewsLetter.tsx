import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, CheckCircle } from 'lucide-react';

type NewsletterData = {
  email: string;
  interests: string[];
};

const Newsletter: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    'Legal Updates',
    'Case Studies',
    'Legal Tips',
    'Regulatory Changes'
  ];

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Newsletter subscription:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-navy">Stay Informed</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest legal updates, insights, and news that matter to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p className="text-gray-600">You've successfully subscribed to our newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail size={16} className="inline mr-1" />
                        Email Address*
                      </label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your email address"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Areas of Interest</h4>
                    <div className="space-y-3">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            value={interest}
                            className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            {...register('interests')}
                          />
                          <span className="text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn bg-primary hover:bg-primary-light text-black px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed border-black"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By subscribing, you agree to receive our newsletter and can unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;