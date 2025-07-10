import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaNewspaper, FaTwitter, FaChartLine, FaBalanceScale, FaBullhorn, FaComments } from 'react-icons/fa';

const categories = [
  { title: 'News Articles', icon: <FaNewspaper className="text-3xl text-blue-600" />, slug: 'news-articles' },
  { title: 'Social Buzz', icon: <FaTwitter className="text-3xl text-blue-400" />, slug: 'social-buzz' },
  { title: 'Stock Market', icon: <FaChartLine className="text-3xl text-green-600" />, slug: 'stock-market' },
  { title: 'Voices on IOCL', icon: <FaBullhorn className="text-3xl text-yellow-600" />, slug: 'voices-on-iocl' },
  { title: 'Legal Mentions & Controversies', icon: <FaBalanceScale className="text-3xl text-red-600" />, slug: 'legal-mentions' },
  { title: 'Public Sentiment', icon: <FaComments className="text-3xl text-purple-600" />, slug: 'public-sentiment' },
];

export default function CategoryGrid() {
  return (
    <section className="py-6 mt-6 px-4">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">📂 Explore Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to={`/category/${cat.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-all p-4 flex items-center space-x-4">
                {cat.icon}
                <span className="text-lg font-medium dark:text-white">{cat.title}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}