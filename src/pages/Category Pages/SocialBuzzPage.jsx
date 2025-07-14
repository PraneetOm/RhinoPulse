import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const baseUrl = import.meta.env.VITE_API_URL;

export default function SocialBuzzPage() {
  const [tweets, setTweets] = useState([]);
  const [showMedia, setShowMedia] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/api/social?q=Indian Oil Corporation`)
      .then(res => res.json())
      .then(data => setTweets(data.tweets.timeline || []))
      .catch(err => console.error('Tweet fetch error:', err));
    }, []);
    {console.log('tweets:', tweets)}

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full text-blue-700 text-3xl">
              <FaTwitter />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white">Social Buzz</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Live tweets, chatter, and trending voices around IOCL.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {tweets.map((tweet, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-2">
                  <FaUserCircle className="w-10 h-10 bg-gray-300 rounded-full mr-3"/>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    @{tweet.screen_name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(tweet.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {tweet.text}
              </p>

              {tweet.entities?.media?.[0]?.media_url_https && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowMedia(!showMedia)}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    {showMedia ? 'Hide Media' : 'See Media'}
                  </button>

                  {showMedia && (
                    <img
                      src={tweet.entities.media[0].media_url_https}
                      alt="Tweet media"
                      className="mt-2 max-w-full rounded border border-gray-300 dark:border-gray-700"
                    />
                  )}
                </div>
              )}
              {tweet.entities?.media?.[0]?.expanded_url && (
              <div className="mt-4">
                <a href={tweet.entities.media[0].expanded_url} target="_blank">
                  <button
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    View on X
                  </button>
                </a>
              </div>
              )}
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex space-x-4">
                <span>❤️ {tweet.favorites}</span>
                <span>🔁 {tweet.retweets}</span>
                <span>💬 {tweet.replies}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
