import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Calendar, FileText, Info } from 'lucide-react';

interface CalculatorResult {
  stampDuty: number;
  registrationFee: number;
  totalCost: number;
  breakdown: {
    item: string;
    amount: number;
    description: string;
  }[];
}

const LegalCalculator: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState('property');
  const [propertyValue, setPropertyValue] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculatePropertyCosts = () => {
    const value = parseFloat(propertyValue);
    if (!value || value <= 0) return;

    // Sample calculation for Maharashtra (rates may vary)
    let stampDutyRate = 0.05; // 5% for residential
    let registrationRate = 0.01; // 1%

    if (propertyType === 'commercial') {
      stampDutyRate = 0.06; // 6% for commercial
    }

    const stampDuty = value * stampDutyRate;
    const registrationFee = value * registrationRate;
    const totalCost = stampDuty + registrationFee;

    const breakdown = [
      {
        item: 'Stamp Duty',
        amount: stampDuty,
        description: `${(stampDutyRate * 100).toFixed(1)}% of property value`
      },
      {
        item: 'Registration Fee',
        amount: registrationFee,
        description: `${(registrationRate * 100).toFixed(1)}% of property value`
      }
    ];

    setResult({
      stampDuty,
      registrationFee,
      totalCost,
      breakdown
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Legal Cost Calculator</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate estimated costs for various legal procedures and transactions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            {/* Calculator Type Selector */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Select Calculator Type</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'property', label: 'Property Registration', icon: <FileText size={16} /> },
                  { id: 'court', label: 'Court Fees', icon: <Calculator size={16} /> },
                  { id: 'stamp', label: 'Stamp Duty', icon: <DollarSign size={16} /> }
                ].map((calc) => (
                  <button
                    key={calc.id}
                    onClick={() => setActiveCalculator(calc.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCalculator === calc.id
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {calc.icon}
                    <span>{calc.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Property Registration Calculator */}
            {activeCalculator === 'property' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4">Property Registration Calculator</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property Value (₹)
                      </label>
                      <input
                        type="number"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(e.target.value)}
                        placeholder="Enter property value"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>

                    <button
                      onClick={calculatePropertyCosts}
                      className="w-full btn btn-primary"
                    >
                      Calculate Costs
                    </button>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Info size={16} className="text-blue-600 mt-1" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">Important Note:</p>
                          <p>These are estimated costs based on Maharashtra rates. Actual costs may vary based on location, property type, and current regulations. Please consult with our legal team for accurate calculations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {result ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-4">Cost Breakdown</h4>
                      
                      <div className="space-y-4">
                        {result.breakdown.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                            <div>
                              <p className="font-medium">{item.item}</p>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <p className="font-bold text-lg">{formatCurrency(item.amount)}</p>
                          </div>
                        ))}
                        
                        <div className="flex justify-between items-center py-3 bg-primary text-white px-4 rounded-lg">
                          <p className="font-bold text-lg">Total Cost</p>
                          <p className="font-bold text-xl">{formatCurrency(result.totalCost)}</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold mb-2">Additional Costs to Consider:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Legal fees for documentation</li>
                          <li>• Property verification charges</li>
                          <li>• Bank processing fees (if applicable)</li>
                          <li>• Society transfer charges</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <Calculator size={48} className="text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-500 mb-2">Ready to Calculate</h4>
                      <p className="text-gray-400">Enter property details to see estimated registration costs.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Other calculators placeholder */}
            {activeCalculator !== 'property' && (
              <div className="text-center py-12">
                <Calculator size={48} className="text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-500 mb-2">Coming Soon</h4>
                <p className="text-gray-400">This calculator is under development. Please check back later.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegalCalculator;