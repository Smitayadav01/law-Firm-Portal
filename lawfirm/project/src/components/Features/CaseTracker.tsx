import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Calendar, Clock, CheckCircle, AlertCircle, Eye } from 'lucide-react';

interface CaseStatus {
  id: string;
  caseNumber: string;
  title: string;
  status: 'active' | 'pending' | 'completed' | 'on-hold';
  lastUpdate: string;
  nextHearing: string;
  progress: number;
  updates: {
    date: string;
    description: string;
    type: 'hearing' | 'filing' | 'update' | 'completion';
  }[];
}

const CaseTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseStatus | null>(null);

  // Sample case data
  const cases: CaseStatus[] = [
    {
      id: '1',
      caseNumber: 'CV/2024/001',
      title: 'Property Dispute - Mumbai',
      status: 'active',
      lastUpdate: '2024-01-15',
      nextHearing: '2024-02-10',
      progress: 65,
      updates: [
        { date: '2024-01-15', description: 'Filed response to defendant\'s motion', type: 'filing' },
        { date: '2024-01-10', description: 'Court hearing scheduled for February 10', type: 'hearing' },
        { date: '2024-01-05', description: 'Discovery documents submitted', type: 'filing' },
        { date: '2023-12-20', description: 'Case initiated and filed', type: 'filing' }
      ]
    },
    {
      id: '2',
      caseNumber: 'CR/2024/002',
      title: 'Criminal Defense Case',
      status: 'pending',
      lastUpdate: '2024-01-12',
      nextHearing: '2024-01-25',
      progress: 30,
      updates: [
        { date: '2024-01-12', description: 'Bail application filed', type: 'filing' },
        { date: '2024-01-08', description: 'Initial consultation completed', type: 'update' },
        { date: '2024-01-05', description: 'Case accepted and retainer signed', type: 'filing' }
      ]
    },
    {
      id: '3',
      caseNumber: 'FL/2023/003',
      title: 'Divorce Proceedings',
      status: 'completed',
      lastUpdate: '2023-12-15',
      nextHearing: 'N/A',
      progress: 100,
      updates: [
        { date: '2023-12-15', description: 'Final decree granted', type: 'completion' },
        { date: '2023-11-20', description: 'Settlement agreement finalized', type: 'update' },
        { date: '2023-10-15', description: 'Mediation session conducted', type: 'hearing' },
        { date: '2023-09-01', description: 'Divorce petition filed', type: 'filing' }
      ]
    }
  ];

  const filteredCases = cases.filter(case_ =>
    case_.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    case_.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'on-hold': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Clock size={16} />;
      case 'pending': return <AlertCircle size={16} />;
      case 'completed': return <CheckCircle size={16} />;
      case 'on-hold': return <AlertCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Case Tracker</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track the progress of your legal cases with real-time updates and detailed information.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by case number or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cases List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold mb-4">Your Cases</h3>
              {filteredCases.map((case_) => (
                <div
                  key={case_.id}
                  className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedCase?.id === case_.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCase(case_)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{case_.caseNumber}</h4>
                      <p className="text-gray-600">{case_.title}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getStatusColor(case_.status)}`}>
                      {getStatusIcon(case_.status)}
                      <span className="ml-1 capitalize">{case_.status}</span>
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{case_.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${case_.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>Last Update: {case_.lastUpdate}</span>
                    </div>
                    <button className="text-primary hover:text-primary-light flex items-center">
                      <Eye size={14} className="mr-1" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Case Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              {selectedCase ? (
                <div>
                  <h3 className="text-xl font-bold mb-4">Case Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700">Case Number</h4>
                      <p className="text-gray-600">{selectedCase.caseNumber}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Title</h4>
                      <p className="text-gray-600">{selectedCase.title}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Status</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center w-fit ${getStatusColor(selectedCase.status)}`}>
                        {getStatusIcon(selectedCase.status)}
                        <span className="ml-1 capitalize">{selectedCase.status}</span>
                      </span>
                    </div>
                    {selectedCase.nextHearing !== 'N/A' && (
                      <div>
                        <h4 className="font-semibold text-gray-700">Next Hearing</h4>
                        <p className="text-gray-600">{selectedCase.nextHearing}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Recent Updates</h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {selectedCase.updates.map((update, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="bg-primary p-1 rounded-full mt-1">
                            <FileText size={12} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800">{update.description}</p>
                            <p className="text-sm text-gray-500">{update.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">Select a Case</h3>
                  <p className="text-gray-400">Click on a case from the list to view detailed information and updates.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseTracker;