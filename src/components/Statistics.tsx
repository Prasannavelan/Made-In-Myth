import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Clock, CheckCircle, Users, Zap } from 'lucide-react';

const Statistics: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <Zap className="text-primary w-6 h-6" />,
      value: 7,
      suffix: '+',
      title: 'Active Projects',
      description: 'Currently working on'
    },
    {
      icon: <CheckCircle className="text-secondary w-6 h-6" />,
      value: 98.2,
      suffix: '%',
      title: 'Client Satisfaction',
      description: 'Happy customers'
    },
    {
      icon: <Users className="text-accent w-6 h-6" />,
      value: 3,
      suffix: '',
      title: 'Services Offered',
      description: 'Specialized domains'
    },
    {
      icon: <Clock className="text-primary w-6 h-6" />,
      value: 24,
      suffix: '/7',
      title: 'Support Available',
      description: 'Always there for you'
    }
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#121212_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-dark-lighter rounded-lg p-8 border border-dark-light hover:border-primary/50 transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-dark-light rounded-full blur-md"></div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-light border border-dark group-hover:border-primary/50 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {inView ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </h3>
                <p className="text-lg font-semibold text-light mb-1">{stat.title}</p>
                <p className="text-light-darker">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;