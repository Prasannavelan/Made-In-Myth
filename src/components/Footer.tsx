import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Video Editing', href: '#video-editing' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Animation', href: '#animation' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Video Production', href: '#video-editing' },
    { name: 'Motion Graphics', href: '#animation' },
    { name: 'Logo Design', href: '#graphic-design' },
    { name: 'Social Media Content', href: '#graphic-design' },
    { name: '3D Animation', href: '#animation' },
    { name: 'YouTube Videos', href: '#video-editing' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/made-in-myth/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/made_in_myth?igsh=ZHFydjY0dXQ0N3h5', label: 'Instagram' },
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/share/15vM7mW1kH/', label: 'Facebook' },
    { icon: <Youtube size={18} />, href: 'https://youtube.com/@madeinmyth?si=zjGsKkHKg--BtpTU', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-lighter text-light-darker relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-16 pb-8 border-b border-dark-light">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center mb-6 group">
  <span className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
    MADE IN MYTH
  </span>
</a>

              <p className="mb-6">
                Transforming ordinary ideas into extraordinary visual content through expert video editing, graphic design, and animation services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-110 hover:shadow-neon group"
                  >
                    <span className="transform group-hover:rotate-12 transition-transform duration-300">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-light text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative inline-block hover:text-primary transition-colors duration-300 group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-light text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="relative inline-block hover:text-primary transition-colors duration-300 group"
                    >
                      <span className="relative z-10">{service.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-light text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <p className="mb-1 font-medium text-light">Email:</p>
                  <a
                    href="mailto:hello@madeinmyth.com"
                    className="hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="relative">
                      madeinmyth2025@gmail.com
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <p className="mb-1 font-medium text-light">Phone:</p>
                  <a
                    href="tel:+15551234567"
                    className="hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="relative">
                      +91 63809 67865
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <p className="mb-1 font-medium text-light">Address:</p>
                  <address className="not-italic">
                    Chennai<br />
                    Tamil Nadu<br />
                    India
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Made In Myth. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="inline-flex items-center text-light hover:text-primary transition-all duration-300 group"
            >
              <span className="relative">
                Back to Top
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
              <ArrowUp className="ml-2 w-4 h-4 transform group-hover:translate-y-[-2px] transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;