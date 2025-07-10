import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import Header from '../Components/Header';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from '../Components/Footer';

const feedbackSummary = {
  totalResponses: 1236,
  sentimentScore: {
    positive: 64,
    neutral: 22,
    negative: 14
  },
  highlights: {
    positive: [
      "LPG delivery experience has improved.",
      "Website redesign is fast and user-friendly.",
      "Customer care response was quick and helpful."
    ],
    neutral: [
      "Fuel pricing is consistent with competitors.",
      "Mobile app is okay but can be faster.",
      "CSR activities are good but not visible enough."
    ],
    negative: [
      "App login is buggy after update.",
      "Too many OTP verifications for simple tasks.",
      "Support hotline was busy for hours last week."
    ]
  }
};

const pieData = [
  { name: 'Positive', value: feedbackSummary.sentimentScore.positive },
  { name: 'Neutral', value: feedbackSummary.sentimentScore.neutral },
  { name: 'Negative', value: feedbackSummary.sentimentScore.negative },
];

const COLORS = ['#22c55e', '#eab308', '#ef4444'];

export default function PublicSentimentPage() {
  const { sentimentScore, highlights, totalResponses } = feedbackSummary;

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white">Public Sentiment</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Analysis of public feedback and customer sentiment toward IOCL across digital platforms.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-10 max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4 text-center">
            Sentiment Distribution
        </h2>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
            <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                label
                outerRadius={90}
                dataKey="value"
            >
                {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </div>

        {/* Sentiment Score Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <FaSmile className="text-green-500 text-3xl mx-auto mb-2" />
            <p className="text-lg font-bold text-green-600">{sentimentScore.positive}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Positive Sentiment</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <FaMeh className="text-yellow-500 text-3xl mx-auto mb-2" />
            <p className="text-lg font-bold text-yellow-500">{sentimentScore.neutral}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Neutral Sentiment</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <FaFrown className="text-red-500 text-3xl mx-auto mb-2" />
            <p className="text-lg font-bold text-red-600">{sentimentScore.negative}%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Negative Sentiment</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Positive Feedback</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {highlights.positive.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300 mb-2">Neutral Feedback</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {highlights.neutral.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Negative Feedback</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {highlights.negative.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-sm text-center text-gray-500 dark:text-gray-400 mt-12">
          Based on {totalResponses}+ public responses aggregated from app reviews, surveys, and forums.
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
