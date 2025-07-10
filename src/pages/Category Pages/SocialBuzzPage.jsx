import { useState } from 'react';
import { FaTwitter, FaRedditAlien, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function SocialBuzzPage() {
  const allPosts = [
    {
      platform: 'X (formely Twitter)',
      icon: <FaXTwitter />,
      user: '@energygeek',
      time: '2h ago',
      content: "Impressed by IOCL’s push toward biofuels and sustainability! 🔋🌱 #GreenEnergy #IOCL",
      likes: 122,
      comments: 14,
      shares: 3
    },
    {
      platform: 'Reddit',
      icon: <FaRedditAlien className="text-orange-500" />,
      user: 'u/FuelWatchDog',
      time: '5h ago',
      content: "Anyone else notice faster LPG delivery lately? Props to IOCL logistics.",
      likes: 641,
      comments: 72,
      shares: 27
    },
    {
      platform: 'X (formely Twitter)',
      icon: <FaXTwitter />,
      user: '@financebuzz',
      time: '6h ago',
      content: "IOCL's numbers are solid this quarter. Looking strong for the long game. 📈 #StockWatch",
      likes: 201,
      comments: 31,
      shares: 56
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin className="text-blue-700" />,
      user: 'Ravi Kumar (IOCL)',
      time: '1d ago',
      content: "Proud to be part of the team driving our green hydrogen initiatives forward. #SustainableFuture",
      likes: 122,
      comments: 56,
      shares: 1
    },
    {
      platform: 'Reddit',
      icon: <FaRedditAlien className="text-orange-500" />,
      user: 'u/chaiguy',
      time: '2d ago',
      content: "Can we talk about how IOCL’s app redesign actually works now? 👏👏",
      likes: 52,
      comments: 9,
      shares: 0
    },
    {
      platform: 'X (formely Twitter)',
      icon: <FaXTwitter />,
      user: '@traderdeepak',
      time: '3d ago',
      content: "Holding IOCL for the long run. This stock's got diesel in the tank. #InvestSmart",
      likes: 44,
      comments: 7,
      shares: 18
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin className="text-blue-700" />,
      user: 'Nivedita Batra',
      time: '5d ago',
      content: "IOCL’s internship program has been a game-changer in my early career. #Leadership",
      likes: 219,
      comments: 23,
      shares: 9
    },
    {
      platform: 'Reddit',
      icon: <FaRedditAlien className="text-orange-500" />,
      user: 'u/OilIsLife',
      time: '1w ago',
      content: "IOCL customer support got back to me in 3 hours — what dimension is this?",
      likes: 723,
      comments: 98,
      shares: 67
    },
    {
      platform: 'X (formely Twitter)',
      icon: <FaXTwitter />,
      user: '@GreenNation',
      time: '6d ago',
      content: "Didn’t expect to say this, but IOCL’s ESG goals are kinda impressive.",
      likes: 421,
      comments: 77,
      shares: 45
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin className="text-blue-700" />,
      user: 'Rajiv Nair (Energy Analyst)',
      time: '1w ago',
      content: "IOCL’s long-term strategy aligns well with India's 2047 energy roadmap.",
      likes: 457,
      comments: 78,
      shares: 14
    }
  ];

  const [filter, setFilter] = useState('All');

  const filteredPosts =
    filter === 'All'
      ? allPosts
      : allPosts.filter((post) => post.platform === filter);

  const platforms = ['All', 'X (formely Twitter)', 'Reddit', 'LinkedIn'];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full text-blue-700 text-3xl">
              <FaTwitter />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white">Social Buzz</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            The internet's unfiltered voice on Indian Oil Corporation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${filter === p
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                } transition`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="max-w-3xl mx-auto space-y-6">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
                {post.icon}
                <span className="font-semibold">{post.user}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
              <p className="text-gray-800 dark:text-gray-100 text-base leading-relaxed">
                {post.content}
                {/* Engagement footer */}
                <div className="flex gap-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>👍 {post.likes} Likes</span>
                  <span>💬 {post.comments} Comments</span>
                  <span>🔁 {post.shares} Reposts</span>
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}