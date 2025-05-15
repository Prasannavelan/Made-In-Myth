import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: null | 'success' | 'error';
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xrbqrrko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: 'Phone',
      content: '+91 63809 67865',
      link: 'tel:+916380967865'
    },
    {
      icon: <Mail className="w-5 h-5 text-secondary" />,
      title: 'Email',
      content: 'madeinmyth2025@gmail.com',
      link: 'mailto:madeinmyth2025@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: 'Location',
      content: 'Chennai, Tamil Nadu, India.',
      link: 'https://maps.app.goo.gl/mj1GyzyPpPDrtp7d9'
    }
  ];

  const services = [
    { name: 'Video Editing', href: '#video-editing' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Animation', href: '#animation' },
    { name: 'All Services', href: '#services' }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-lighter">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 text-4xl font-bold"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-light-darker"
          >
            Ready to bring your creative vision to life? Reach out to us today and let's start crafting something amazing together.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start p-4 bg-dark rounded-lg hover:bg-dark-light transition-colors duration-300"
                >
                  <div className="p-3 bg-dark-light rounded-full mr-4">{item.icon}</div>
                  <div>
                    <h4 className="text-light font-medium mb-1">{item.title}</h4>
                    <p className="text-light-darker">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-xl font-bold text-light mb-4">Our Services</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="text-light-darker hover:text-primary transition-colors duration-300"
                >
                  {service.name}
                </a>
              ))}
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-light mb-4">Office Hours</h3>
              <ul className="space-y-2 text-light-darker">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-dark rounded-lg p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-light mb-6">Send Us a Message</h3>

            {status.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start ${
                  status.type === 'success'
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 mt-0.5" />
                )}
                <p>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-light-darker mb-2">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-light text-light border border-dark-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light-darker mb-2">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-light text-light border border-dark-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-light-darker mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-light text-light border border-dark-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Animation">Animation</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-light-darker mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-light text-light border border-dark-light rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition duration-300"
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
