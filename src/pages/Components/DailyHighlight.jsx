import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DailyHighlight() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    setFact("Did you know? IOCL has over 33,000 fuel stations across India, making it the largest fuel retailer.");
  }, []);

  return (
    <div className="space-y-8 mt-0 -py-8">
      {/* Hero Section with visual hierarchy */}
      <motion.div 
        className="bg-orange-50 dark:bg-gray-800 border-l-4 border-orange-500 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-orange-400 mb-2">🌟 Daily Highlight</h1>
        <p className="text-lg text-gray-800 dark:text-white">{fact}</p>
      </motion.div>
    </div>
  )
}