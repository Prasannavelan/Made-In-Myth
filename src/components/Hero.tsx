import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

// ...same imports

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background remains unchanged */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[90px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#121212_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center bg-dark-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-light hover:border-primary/50 transition-colors duration-300"
            >
              <Sparkles className="text-primary mr-2" size={16} />
              <span className="text-light-darker text-sm">Transforming Ideas into Visual Stories</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 relative text-4xl md:text-5xl font-bold text-light"
            >
              <span className="block mb-2">Crafting Visual</span>
              <span className="text-primary">Experiences That Inspire</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-light-darker mb-8 max-w-xl"
            >
              Made In Myth is a creative powerhouse focused on transforming your ideas into compelling visual content through expert video editing, graphic design, and animation services.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center group hover:shadow-md hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Project 
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#services" 
                className="btn btn-outline flex items-center group hover:shadow-md hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services 
                <Play className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-dark-light group-hover:border-primary/50 transition-colors duration-300">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60" 
                alt="Creative studio workspace" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-light text-lg font-medium mb-1">Transform your vision into reality</p>
                <p className="text-light-darker">Professional creative services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
