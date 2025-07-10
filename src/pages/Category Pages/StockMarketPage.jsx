import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Chart data
const dataSets = {
  '1D': [
    { name: '10:00', price: 150.1 },
    { name: '11:00', price: 151.2 },
    { name: '12:00', price: 150.6 },
    { name: '13:00', price: 150.9 },
    { name: '14:00', price: 150.3 },
    { name: '15:00', price: 149.9 },
    { name: '15:30', price: 150.3 }
  ],
  '5D': [
    { name: '3 Jul', price: 148.2 },
    { name: '4 Jul', price: 149.5 },
    { name: '5 Jul', price: 151.3 },
    { name: '6 Jul', price: 152.7 },
    { name: '7 Jul', price: 150.9 },
    { name: '8 Jul', price: 149.8 },
    { name: '9 Jul', price: 150.3 }
  ],
  '1M': [
    { name: '10 Jun', price: 144.2 },
    { name: '15 Jun', price: 139.8 },
    { name: '20 Jun', price: 141.5 },
    { name: '25 Jun', price: 143.3 },
    { name: '30 Jun', price: 146.1 },
    { name: '5 Jul', price: 148.7 },
    { name: '9 Jul', price: 150.3 }
  ]
};

const stats = [
  { label: "Current Price", value: "₹150.33" },
  { label: "Previous Close", value: "₹153.82" },
  { label: "Day Range", value: "₹150.09 - ₹153.73" },
  { label: "1M Change", value: "+₹8.14 (+5.72%)" }
];

const tips = [
  "IOCL price increased by ₹8.14 over the last month, indicating a 5.72% gain.",
  "Stock is recovering from recent dip and holding strong above ₹150 support level.",
  "Day range volatility suggests consolidation around ₹150–₹153.",
  "Trendline shows gradual accumulation; momentum remains mildly bullish."
];

const rangeOptions = ['1D', '5D', '1M'];

export default function StockMarketPage() {
  const [range, setRange] = useState('5D');
  const chartData = dataSets[range];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white">IOCL Stock Market</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Latest insights and stock trends related to Indian Oil Corporation Limited (NSE: IOC).
            </p>
          </div>

          {/* Stock Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded p-4 text-center shadow hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Range Selector */}
          <div className="flex justify-center gap-4 mb-6">
            {rangeOptions.map(option => (
              <button
                key={option}
                onClick={() => setRange(option)}
                className={`px-4 py-1 text-sm font-medium rounded-full ${range === option
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white dark:bg-gray-800 rounded p-6 shadow mb-10">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">{range} Price Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Analyst Insights */}
          <div className="bg-white dark:bg-gray-800 rounded p-6 shadow">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">Analyst Insights</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-200">
              {tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}