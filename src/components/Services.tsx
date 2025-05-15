import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Video, Palette, Film, ArrowRight } from 'lucide-react';
import ServiceDetail from './ServiceDetail';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section-padding bg-dark-lighter">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-light-darker"
          >
            We deliver premium creative solutions across three core domains, helping brands and individuals communicate their vision through compelling visual content.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <ServiceDetail 
            id="video-editing"
            title="Video Editing"
            description="Transform raw footage into compelling stories with our professional video editing services."
            icon={<Video className="w-8 h-8" />}
            colorClass="primary"
            services={[
              "YouTube Video Production",
              "Social Media Reels",
              "Cinematic Color Grading",
              "Brand Commercials",
              "Corporate Profiles",
              "Wedding Videos"
            ]}
            image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww"
            variants={itemVariants}
          />
          
          <ServiceDetail 
            id="graphic-design"
            title="Graphic Design"
            description="Create visual content that communicates and captivates with our expert graphic design services."
            icon={<Palette className="w-8 h-8" />}
            colorClass="secondary"
            services={[
              "Logo Design",
              "YouTube Thumbnails",
              "Social Media Content",
              "Motion Posters",
              "Brochures & Flyers",
              "Brand Identity"
            ]}
            image="https://plus.unsplash.com/premium_photo-1683133723694-f5eff1e4c047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhcGhpYyUyMGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
            variants={itemVariants}
          />
          
          <ServiceDetail 
            id="animation"
            title="Animation"
            description="Bring ideas to life with dynamic movement and visual storytelling through our animation expertise."
            icon={<Film className="w-8 h-8" />}
            colorClass="accent"
            services={[
              "2D Animation",
              "3D Animation",
              "Motion Graphics",
              "Character Animation",
              "Whiteboard Animation",
              "Explainer Videos"
            ]}
            image="https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWF0aW9uJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-flex items-center">
            Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;