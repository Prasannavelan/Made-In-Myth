import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, Minus } from 'lucide-react';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  services: string[];
  image: string;
  variants: any;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  icon,
  colorClass,
  services,
  image,
  variants
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      id={id}
      variants={variants}
      className={`service-card ${colorClass} overflow-hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent"></div>
          <div 
            className={`absolute top-4 left-4 p-3 rounded-full bg-${colorClass} bg-opacity-20 text-${colorClass}`}
          >
            {icon}
          </div>
        </div>

        <div className="p-6 flex-grow">
          <h3 className={`text-xl font-bold mb-2 text-${colorClass}`}>{title}</h3>
          <p className="text-light-darker mb-6">{description}</p>
          
          <div className="space-y-3">
            {services.slice(0, isExpanded ? services.length : 3).map((service, index) => (
              <div key={index} className="flex items-start">
                <div className={`p-1 rounded-full bg-${colorClass} bg-opacity-20 mr-3 mt-1`}>
                  <Check className={`w-3 h-3 text-${colorClass}`} />
                </div>
                <p className="text-light-darker">{service}</p>
              </div>
            ))}
          </div>
          
          {services.length > 3 && (
            <button 
              onClick={toggleExpand}
              className={`mt-4 text-${colorClass} flex items-center text-sm font-medium hover:underline focus:outline-none`}
            >
              {isExpanded ? (
                <>
                  <Minus className="w-4 h-4 mr-1" /> Show Less
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-1" /> View All Services
                </>
              )}
            </button>
          )}
        </div>
        
        <div className="p-6 pt-0 mt-auto">
          <a 
            href="#contact" 
            className="btn btn-primary w-full text-center"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;