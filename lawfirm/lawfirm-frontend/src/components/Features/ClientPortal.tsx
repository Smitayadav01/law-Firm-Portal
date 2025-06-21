import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, FileText, Calendar, MessageSquare, Download, Upload, Eye } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  category: 'contract' | 'evidence' | 'correspondence' | 'court-filing';
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending' | 'completed';
  notes?: string;
}

const ClientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  // Sample data
  const documents: Document[] = [
    {
      id: '1',
      name: 'Property Purchase Agreement.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      category: 'contract'
    },
    {
      id: '2',
      name: 'Evidence Photos.zip',
      type: 'ZIP',
      size: '15.2 MB',
      uploadDate: '2024-01-12',
      category: 'evidence'
    },
    {
      id: '3',
      name: 'Court Filing Receipt.pdf',
      type: 'PDF',
      size: '1.1 MB',
      uploadDate: '2024-01-10',
      category: 'court-filing'
    }
  ];

  const appointments: Appointment[] = [
    {
      id: '1',
      date: '2024-02-10',
      time: '10:00 AM',
      type: 'Court Hearing',
      status: 'confirmed',
      notes: 'Property dispute hearing - bring all relevant documents'
    },
    {
      id: '2',
      date: '2024-02-05',
      time: '2:00 PM',
      type: 'Consultation',
      status: 'pending',
      notes: 'Review case strategy and next steps'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'contract': return 'bg-blue-100 text-blue-800';
      case 'evidence': return 'bg-green-100 text-green-800';
      case 'correspondence': return 'bg-yellow-100 text-yellow-800';
      case 'court-filing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="text-center mb-8">
                <div className="bg-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Client Portal</h2>
                <p className="text-gray-600">Access your case information and documents</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have access? <a href="/contact" className="text-primary hover:text-primary-light">Contact us</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
                  <p className="text-gray-200">Case: CV/2024/001 - Property Dispute</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-gray-200 hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: <User size={16} /> },
                  { id: 'documents', label: 'Documents', icon: <FileText size={16} /> },
                  { id: 'appointments', label: 'Appointments', icon: <Calendar size={16} /> },
                  { id: 'messages', label: 'Messages', icon: <MessageSquare size={16} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Case Overview</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Case Status</h4>
                      <p className="text-2xl font-bold text-blue-600">Active</p>
                      <p className="text-sm text-blue-600">65% Complete</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">Next Hearing</h4>
                      <p className="text-lg font-bold text-green-600">Feb 10, 2024</p>
                      <p className="text-sm text-green-600">10:00 AM</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Documents</h4>
                      <p className="text-2xl font-bold text-purple-600">{documents.length}</p>
                      <p className="text-sm text-purple-600">Files Available</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FileText size={16} className="text-primary" />
                        <div>
                          <p className="font-medium">Response filed to defendant's motion</p>
                          <p className="text-sm text-gray-600">January 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar size={16} className="text-primary" />
                        <div>
                          <p className="font-medium">Court hearing scheduled</p>
                          <p className="text-sm text-gray-600">January 10, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Documents</h3>
                    <button className="btn btn-primary flex items-center space-x-2">
                      <Upload size={16} />
                      <span>Upload Document</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText size={20} className="text-primary" />
                            <div>
                              <h4 className="font-medium">{doc.name}</h4>
                              <p className="text-sm text-gray-600">
                                {doc.type} • {doc.size} • Uploaded {doc.uploadDate}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(doc.category)}`}>
                              {doc.category.replace('-', ' ')}
                            </span>
                            <button className="text-primary hover:text-primary-light">
                              <Eye size={16} />
                            </button>
                            <button className="text-primary hover:text-primary-light">
                              <Download size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'appointments' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Appointments</h3>

                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{appointment.type}</h4>
                            <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </div>
                        {appointment.notes && (
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                            <strong>Notes:</strong> {appointment.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Messages</h3>
                  
                  <div className="text-center py-12">
                    <MessageSquare size={48} className="text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-500 mb-2">No Messages</h4>
                    <p className="text-gray-400">Your messages with your legal team will appear here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortal;