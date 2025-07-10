import { FaNewspaper } from 'react-icons/fa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function NewsPage() {
  const articles = [
    {
      title: "Indian Oil reports record Q1 profits.",
      date: "2 hours ago",
      summary: "IOCL saw a 12% rise in fuel demand year-over-year, pushing its revenue beyond projections.",
      source: "The Economic Times"
    },
    {
      title: "IOCL signs green hydrogen MoU.",
      date: "Yesterday",
      summary: "The agreement, signed in New Delhi, marks a major step toward sustainable energy leadership.",
      source: "Hindustan Times"
    },
    {
      title: "Fuel prices expected to remain steady.",
      date: "3 days ago",
      summary: "Despite global market fluctuations, analysts expect domestic prices to hold firm.",
      source: "Mint"
    },
    {
      title: "IOCL inaugurates new R&D facility in Faridabad.",
      date: "1 week ago",
      summary: "The facility will focus on renewable fuels and green technologies.",
      source: "Business Standard"
    },
    {
      title: "Government clears subsidy package for oil marketing firms.",
      date: "2 weeks ago",
      summary: "IOCL among major beneficiaries of new direct benefit transfer policy.",
      source: "Financial Express"
    },
    {
      title: "IOCL to deploy 10,000 EV charging stations by 2025.",
      date: "4 days ago",
      summary: "A strategic shift towards clean mobility and infrastructure growth.",
      source: "LiveMint"
    },
    {
      title: "Joint venture between IOCL and NTPC finalized.",
      date: "5 days ago",
      summary: "The partnership aims to scale up hydrogen fuel infrastructure across India.",
      source: "CNBC-TV18"
    },
    {
      title: "IOCL rolls out upgraded customer service app.",
      date: "6 days ago",
      summary: "The new version improves booking, tracking, and complaint resolution.",
      source: "The Hindu"
    },
    {
      title: "Investors show confidence in IOCL’s energy transition roadmap.",
      date: "Last week",
      summary: "Analysts highlight IOCL’s strong balance sheet and long-term strategy.",
      source: "Reuters"
    },
    {
      title: "IOCL’s Paradip refinery expansion enters final phase.",
      date: "2 weeks ago",
      summary: "The upgrade is expected to boost refining capacity by 20%.",
      source: "Bloomberg"
    }
  ];

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

      {/* News Feed */}
      <div className="max-w-4xl mx-auto space-y-6">
        {articles.map((item, index) => (
            <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
            >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                {item.source}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
