import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ──────────────────────────────────── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navItems = [
    { name: 'Home',          href: '#home' },
    { name: 'Video Editing', href: '#video-editing' },
    { name: 'Graphic Design',href: '#graphic-design' },
    { name: 'Animation',     href: '#animation' },
    { name: 'About Us',      href: '#about' },
    { name: 'Contact Us',    href: '#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white shadow-md border-b border-gray-200'
          : 'bg-white/90 backdrop-blur-sm'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─────────────────────────── top bar ── */}
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/Logo.png"
              alt="Made In Myth logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-100"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="relative px-3 py-1 text-gray-800 hover:text-primary transition-colors duration-300 group"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-3 flex items-center btn btn-primary group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Get Started
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden relative w-9 h-9 flex items-center justify-center text-gray-800 hover:text-primary focus:outline-none"
          >
            <div className="absolute inset-0 bg-gray-100 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ───────────────────────────── mobile menu ── */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={toggleMenu}
                  className="relative px-4 py-2 text-gray-800 hover:text-primary transition-colors duration-300 overflow-hidden group"
                >
                  <span className="relative z-10">{name}</span>
                  <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}

              <a
                href="#contact"
                onClick={toggleMenu}
                className="flex items-center justify-center btn btn-primary group"
              >
                <Sparkles className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Get Started
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
