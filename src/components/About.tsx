import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: 'Creativity',
      description: 'We approach each project with fresh perspectives and innovative ideas.'
    },
    {
      icon: <Award className="w-5 h-5 text-secondary" />,
      title: 'Quality',
      description: 'We deliver excellence in every pixel, frame, and interaction.'
    },
    {
      icon: <Target className="w-5 h-5 text-accent" />,
      title: 'Precision',
      description: 'We pay meticulous attention to details that make a difference.'
    },
    {
      icon: <Heart className="w-5 h-5 text-primary" />,
      title: 'Passion',
      description: 'We love what we do, and it shows in our work and dedication.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-dark-light">
              <img 
                src="https://images.unsplash.com/photo-1642406415849-a410b5d01a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww" 
                alt="Creative team at work" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-dark-lighter rounded-full flex items-center justify-center border-4 border-primary cursor-pointer hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 p-4 bg-dark-lighter rounded-lg shadow-lg border border-dark-light max-w-xs">
              <p className="text-light font-medium mb-1">Our Creative Process</p>
              <p className="text-sm text-light-darker">Watch how we bring your ideas to life through our creative workflow</p>
            </div>
          </motion.div>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-6">
                About Made In Myth
              </h2>
              <p className="text-light-darker mb-6">
                Made In Myth is a creative powerhouse dedicated to transforming ordinary ideas into extraordinary visual content. Founded on the belief that every brand has a unique story worth telling, we combine technical expertise with artistic vision to create compelling narratives that resonate with audiences.
              </p>
              <p className="text-light-darker mb-8">
                Our team of passionate creatives, technical experts, and storytellers work collaboratively to deliver premium visual solutions across video editing, graphic design, and animation. We pride ourselves on our ability to understand your vision and elevate it beyond expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 p-2 bg-dark-light rounded-full h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-light-darker">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contact" className="btn btn-primary inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;