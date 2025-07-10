import { FaQuoteLeft } from 'react-icons/fa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const voices = [
  {
    name: "Sandeep Kumar",
    role: "Executive Director, R&D",
    quote: "IOCL is not just an oil company, it’s a technology-driven energy enterprise ready for the future.",
    date: "July 2025",
    tag: "Leadership",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ritika Joshi",
    role: "Summer Intern, IIM Bangalore",
    quote: "My internship at IOCL gave me real-time exposure to the energy sector and operations management.",
    date: "June 2025",
    tag: "Internship",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Amit Patel",
    role: "Retail Customer, Gujarat",
    quote: "Their mobile app for LPG booking has improved a lot. Fast, simple, and actually works.",
    date: "July 2025",
    tag: "Customer Feedback",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Megha Batra",
    role: "Manager, Corporate Social Responsibility",
    quote: "We’re committed to sustainable practices and empowering communities through our CSR programs.",
    date: "May 2025",
    tag: "CSR",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Deepak Nair",
    role: "Plant Supervisor, Panipat Refinery",
    quote: "From automation to safety training — IOCL gives us the tools to perform and grow.",
    date: "April 2025",
    tag: "Operations",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Swati Sharma",
    role: "Graduate Engineer Trainee",
    quote: "As a young engineer, working here feels like being part of something vital and large-scale.",
    date: "June 2025",
    tag: "New Joiner",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg"
  }
];

export default function VoicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full text-blue-700 text-2xl">
                <FaQuoteLeft />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white">Voices on IOCL</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Insights, experiences, and statements from those who make IOCL what it is.
            </p>
          </div>

          {/* Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voices.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-800 dark:text-gray-100 text-base italic mb-4">
                  “{item.quote}”
                </p>

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{item.tag}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
