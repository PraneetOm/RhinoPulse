import { FaNewspaper } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const baseUrl = import.meta.env.VITE_API_URL;

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/news?q=Indian Oil Corporation`)
      .then(res => res.json())
      .then(data => setArticles(data.articles || []))
      .catch(err => console.error('News fetch error:', err));
  }, []);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
    {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-full text-blue-700 text-3xl">
            <FaNewspaper />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-blue-900 dark:text-white">News Articles</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          All the latest press, media updates, and coverage about IOCL.
        </p>
      </div>

      {articles.map((article, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    {article.image && (
      <img
        src={article.image}
        alt={article.title}
        className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
      />
    )}
    <div className="flex-1">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
          {article.title}
        </h3>
      </a>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        {article.source.name} • {new Date(article.publishedAt).toLocaleString()}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
    </div>
  </div>
))}
    </div>
    <Footer />
    </>
  );
}
