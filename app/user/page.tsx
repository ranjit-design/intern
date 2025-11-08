'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, FileText, User, Heart } from 'lucide-react';
import Link from 'next/link';

export default function UserPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">User Dashboard</h1>
                <p className="text-gray-600">Welcome back! Manage your appointments and health records.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">My Appointments</h3>
              <p className="text-gray-600 mb-4">View and manage your upcoming appointments</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Appointments →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Records</h3>
              <p className="text-gray-600 mb-4">Access your medical history and reports</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Records →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your health metrics and vitals</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Health Data →
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
