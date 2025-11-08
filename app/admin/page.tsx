'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Edit, Trash2, Search, X, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import initialUsers from '@/data/users.json';
import doctors from '@/data/doctors.json';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  gender: string;
  address: string;
  appointmentTime: string;
  assignedDoctor: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<User>({
    id: '',
    fullName: '',
    email: '',
    phone: '',
    role: 'User',
    gender: 'Male',
    address: '',
    appointmentTime: '',
    assignedDoctor: doctors[0].name,
  });

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('hospitalUsers');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // If no stored users, use initial data
      setUsers(initialUsers);
      localStorage.setItem('hospitalUsers', JSON.stringify(initialUsers));
    }
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('hospitalUsers', JSON.stringify(users));
    }
  }, [users]);

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  const handleOpenModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData(user);
    } else {
      setEditingUser(null);
      setFormData({
        id: Date.now().toString(),
        fullName: '',
        email: '',
        phone: '',
        role: 'User',
        gender: 'Male',
        address: '',
        appointmentTime: '',
        assignedDoctor: doctors[0].name,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => user.id === editingUser.id ? formData : user));
    } else {
      // Add new user
      setUsers([...users, formData]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all data to original? This will delete all changes.')) {
      setUsers(initialUsers);
      localStorage.setItem('hospitalUsers', JSON.stringify(initialUsers));
      alert('Data has been reset to original!');
    }
  };

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
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage users and appointments</p>
              </div>
              <button
                onClick={handleResetData}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset Data</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <button
                  onClick={() => handleOpenModal()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add User</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Full Name</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Phone</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Role</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Gender</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Appointment Time</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Assigned Doctor</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">{user.fullName}</td>
                      <td className="py-4 px-4">{user.email}</td>
                      <td className="py-4 px-4">{user.phone}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.role === 'Doctor' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4">{user.gender}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{user.appointmentTime}</td>
                      <td className="py-4 px-4">{user.assignedDoctor}</td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleOpenModal(user)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No users found matching your search.
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {editingUser ? 'Edit User' : 'Add New User'}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                      placeholder="Phone"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                    >
                      <option value="User">User</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Assigned Doctor</label>
                    <select
                      value={formData.assignedDoctor}
                      onChange={(e) => setFormData({ ...formData, assignedDoctor: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                    >
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.name}>
                          {doctor.name} - {doctor.department}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="123 Main St, City, State ZIP"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Appointment Time</label>
                  <input
                    type="text"
                    required
                    value={formData.appointmentTime}
                    onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="2024-11-15 10:00 AM"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    {editingUser ? 'Update User' : 'Add User'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
