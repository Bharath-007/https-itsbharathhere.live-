import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: 'Location',
      details: 'Coimbatore, Tamil Nadu, India',
    },
    {
      icon: <Mail size={24} className="text-accent" />,
      title: 'Email',
      details: 'mailtobharath22@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-accent" />,
      title: 'Phone',
      details: '+91 9597913367',
    },
    {
      icon: <Clock size={24} className="text-accent" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9AM - 6PM',
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-heading text-center"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary max-w-3xl mx-auto text-center mb-12"
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out using the form below or through my contact information.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-lg">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
                    <p className="text-text-secondary">{info.details}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4">Freelance Availability</h3>
                <p className="text-text-secondary mb-4">
                  I'm currently available for freelance projects and open to discussing new opportunities.
                  If you have a project that needs a skilled frontend developer, let's talk!
                </p>
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-md">
                  Available for work
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Let's Create Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Whether you need a website, web application, or interactive experience,
            I'm here to help bring your vision to life with modern technologies and
            creative solutions.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Contact;