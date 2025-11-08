'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Baby, Bone, Stethoscope, Activity } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
  },
    
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla deserunt quia vel neque necessitatibus a voluptatibus 
            
            
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
