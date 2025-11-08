'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health, Our
              <span className="text-blue-600"> Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla deserunt quia vel neque 
              necessitatibus a voluptatibus mollitia libero. Dignissimos quod libero 
              pariatur perferendis vitae delectus, soluta eos magni praesentium. Saepe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-center font-semibold">
                Book Appointment
              </Link>
              <a href="#services" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition text-center font-semibold">
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600 text-sm">Expert Doctors</p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-gray-600 text-sm">Happy Patients</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-600 text-sm">Emergency Care</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
              alt="Medical professionals"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <p className="text-sm text-gray-600 mb-1">Available 24/7</p>
              <p className="text-2xl font-bold text-blue-600">Emergency Care</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
