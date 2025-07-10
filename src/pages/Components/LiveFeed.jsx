import { useEffect, useState } from 'react';

const mockPosts = [
  {
    source: "The Economic Times",
    type: "news",
    content: "Indian Oil Corp to invest ₹61,000 crore in green energy projects.",
    time: "2 hours ago"
  },
  {
    source: "Moneycontrol",
    type: "news",
    content: "IOCL stock sees a 1.8% rise after positive quarterly results.",
    time: "5 hours ago"
  },
  {
    source: "X (formely Twitter)",
    type: "social",
    content: "@energygeek: Impressed by IOCL's push toward biofuels and sustainability!",
    time: "9 hours ago"
  },
  {
    source: "X (formely Twitter)",
    type: "social",
    content: "@financebuzz: IOCL’s numbers are solid this quarter. Looking strong.",
    time: "12 hours ago"
  }
];

export default function LiveFeed() {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFeed(mockPosts);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredFeed = feed.filter(post =>
    filter === "all" ? true : post.type === filter
  );

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 dark:text-white">📡 Latest Pulse</h2>

      <div className="flex space-x-4 mb-4 px-3">
        {["all", "news", "social"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filter === cat ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-800"
            } transition`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white p-4 rounded shadow space-y-2">
                <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
                <div className="h-3 bg-gray-200 w-full rounded"></div>
              </div>
            ))
          : filteredFeed.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded font-semibold shadow dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.source} • {item.time}</p>
                <p className="text-gray-800 mt-1 dark:text-white">{item.content}</p>
              </div>
            ))}
      </div>
    </section>
  );
}