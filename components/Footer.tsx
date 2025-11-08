'use client';

import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" fill="currentColor" />
              <span className="text-2xl font-bold">Hospital Landing Page</span>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quia vel neque. 
              
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Cardiology</li>
              <li className="text-gray-400">Neurology</li>
              <li className="text-gray-400">Pediatrics</li>
              <li className="text-gray-400">Orthopedics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p> Hospital Landing Page.</p>
        </div>
      </div>
    </footer>
  );
}
