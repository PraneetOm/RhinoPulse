import { motion } from 'framer-motion';

const updates = [
  {
    title: "Strengthen Core Businesses",
    description: "IOCL focuses on core energy sectors for long-term sustainability.",
  },
  {
    title: "Propel Cost Optimization",
    description: "Initiatives to streamline operations and reduce expenditures.",
  },
  {
    title: "Reinforce Customer Centricity",
    description: "Enhancing service delivery and experience.",
  },
  {
    title: "Nurture Leadership & Talent",
    description: "Building the next generation of leaders within IOCL.",
  },
  {
    title: "Transition Ready",
    description: "Preparedness for energy transition and green initiatives.",
  },
];

export default function FeaturedNews() {
  return (
    <section className=" bg-white py-6 px-4 shadow-md rounded-lg my-6 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">🚀 Featured Updates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {updates.map((item, idx) => (
          <motion.div 
            className="p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div key={idx} className="border-l-4 border-blue-700 pl-4 py-2 bg-gray-50 dark:bg-gray-900 dark:text-white rounded hover:shadow-sm transition-all">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}