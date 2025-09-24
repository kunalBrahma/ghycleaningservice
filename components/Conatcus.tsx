'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string; // Optional field
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // EmailJS configuration (hardcoded for static site)
      const serviceID = 'service_bsldhwm'; // Replace with your EmailJS Service ID
      const templateID = 'template_27sxpz4'; // Replace with your EmailJS Template ID
      const publicKey = 'u0-T480m625EhYeMu'; // Replace with your EmailJS Public Key

      // EmailJS template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone , 
        service: data.service,
        message: data.message || 'No message provided', // Fallback if message is empty
        to_email: 'guwahaticleaningservice@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    }
  };

  // Initialize EmailJS (run once on component mount)
  React.useEffect(() => {
    emailjs.init('your_public_key'); // Replace with your EmailJS Public Key
  }, []);

  return (
    <section className="py-14 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Form & Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number "
                    className={`w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    {...register('phone', {
                      required: 'Phone is require',
                      pattern: {
                        value: /^[0-9+\-\s()]*$/, // Allows numbers, +, -, spaces, and parentheses
                        message: 'Invalid phone number format',
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="relative">
                  <select
                    defaultValue=""
                    className={`w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300 appearance-none text-foreground/70 focus:text-foreground ${
                      errors.service ? 'border-red-500' : ''
                    }`}
                    {...register('service', { required: 'Please select a service' })}
                  >
                    <option value="" disabled>
                      Service of Interest
                    </option>
                    <option value="sofa">Sofa Cleaning</option>
                    <option value="bathroom">Bathroom Cleaning</option>
                    <option value="full-home">Full Home Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                  </select>
                  <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50 pointer-events-none" />
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message (Optional)"
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 px-1 outline-none focus:border-primary transition-colors duration-300"
                    {...register('message')} // No required validation
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-2 lg:py-4 font-medium text-base flex items-center justify-center transition-all duration-300 mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <div className="flex items-start gap-4 mb-4">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a
                    href="tel:+917099075965"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 70990 75965
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a
                    href="mailto:guwahaticleaningservice@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    guwahaticleaningservice@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative w-full h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31266.747570154854!2d91.80282878904023!3d26.13575387115258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2788ad6566ff3305%3A0x7ce36d3add79ffb3!2sGuwahati%20Cleaning%20Service!5e1!3m2!1sen!2sin!4v1758683959424!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </section>
  );
}
