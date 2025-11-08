'use client';

import { motion } from 'framer-motion';
import { Award, Users, Building, Clock } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Expert Doctors' },
  { icon: Building, value: '15+', label: 'Departments' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
              alt="Hospital building"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl md:text-5xl font-bold text-gray-700 mb-6">
              About Hospital Landing Page
            </h2>
            <p className="text-lg text-gray-600 mb-6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nulla deserunt quia vel neque necessitatibus a voluptatibus mollitia libero. 
               Dignissimos quod libero pariatur perferendis vitae delectus, soluta eos magni praesentium. Saepe.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nulla deserunt quia vel neque necessitatibus a voluptatibus mollitia libero. 
              Dignissimos quod libero pariatur perferendis vitae delectus, soluta eos magni praesentium. Saepe.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
