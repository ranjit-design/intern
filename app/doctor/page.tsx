'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, FileText, Activity } from 'lucide-react';
import Link from 'next/link';

export default function DoctorPage() {
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
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Doctor Page</h1>
                <p className="text-gray-600">Manage your patients and appointments efficiently.</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Today's Schedule</h3>
              <p className="text-gray-600 mb-4">View your appointments for today</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Schedule →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Patient List</h3>
              <p className="text-gray-600 mb-4">Access your patient records and history</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Patients →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prescriptions</h3>
              <p className="text-gray-600 mb-4">Create and manage prescriptions</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Manage Prescriptions →
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
