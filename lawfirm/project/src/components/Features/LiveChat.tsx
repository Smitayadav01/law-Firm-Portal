import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with your legal inquiries. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': 'Hello! Welcome to Seema Vishwakarma & Associates. How can I help you with your legal needs today?',
    'services': 'We offer comprehensive legal services including Civil Law, Criminal Law, Family Law, Property Law, Corporate Law, Consumer Protection, Labour & Employment, and Documentation Services.',
    'appointment': 'I can help you schedule an appointment. Please click the "Book Consultation" button on our website or call us at +91 9324762845.',
    'contact': 'You can reach us at:\nPhone: +91 9324762845 or +91 9819892886\nEmail: seemavish1981@gmail.com\nAddress: Shop No. 2, Rani Apartment, Opp. Bank of India, Dahisar (East), Mumbai - 400068',
    'hours': 'Our office hours are Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays.',
    'fees': 'Our fees vary depending on the type of legal service required. Please schedule a consultation to discuss your specific needs and our fee structure.',
    'experience': 'Advocate Seema Vishwakarma is qualified with M.Com., L.L.B. and practices as a High Court Advocate with extensive experience in various areas of law.',
    'default': 'Thank you for your question. For detailed legal advice, I recommend scheduling a consultation with our experienced advocates. You can book an appointment through our website or call us directly.'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.hello;
    } else if (message.includes('service') || message.includes('practice') || message.includes('area')) {
      return predefinedResponses.services;
    } else if (message.includes('appointment') || message.includes('book') || message.includes('schedule')) {
      return predefinedResponses.appointment;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('address')) {
      return predefinedResponses.contact;
    } else if (message.includes('hours') || message.includes('time') || message.includes('open')) {
      return predefinedResponses.hours;
    } else if (message.includes('fee') || message.includes('cost') || message.includes('price')) {
      return predefinedResponses.fees;
    } else if (message.includes('experience') || message.includes('qualification') || message.includes('about')) {
      return predefinedResponses.experience;
    } else {
      return predefinedResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-light transition-colors z-40"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-40 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">Legal Assistant</h3>
              <p className="text-sm text-gray-200">Online now</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-primary' : 'bg-gray-200'}`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="p-2 rounded-full bg-gray-200">
                      <Bot size={16} className="text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white p-2 rounded-md hover:bg-primary-light transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;