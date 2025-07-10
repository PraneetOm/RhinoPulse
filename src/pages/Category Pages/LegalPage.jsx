import { FaGavel, FaBalanceScale, FaFileContract } from 'react-icons/fa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const legalItems = [
  {
    title: "Supreme Court seeks explanation from IOCL on subsidy delay",
    date: "3 July 2025",
    tag: "Litigation",
    icon: <FaGavel className="text-red-500" />,
    summary:
      "The SC has issued a notice regarding delays in fuel subsidy disbursements, following a PIL filed last month."
  },
  {
    title: "Environmental clearance violation notice issued to refinery unit",
    date: "27 June 2025",
    tag: "Regulatory",
    icon: <FaBalanceScale className="text-yellow-500" />,
    summary:
      "MoEFCC has flagged IOCL’s Panipat unit for exceeding approved emissions during Q1 operations."
  },
  {
    title: "IOCL responds to RTI case on procurement transparency",
    date: "22 June 2025",
    tag: "Policy",
    icon: <FaFileContract className="text-blue-500" />,
    summary:
      "In response to a transparency RTI, IOCL released a partial procurement list to public domain under official communication."
  },
  {
    title: "Petroleum ministry drafts revised compliance norms for OMCs",
    date: "19 June 2025",
    tag: "Policy",
    icon: <FaFileContract className="text-blue-500" />,
    summary:
      "The draft includes new standards for reporting environmental impact and vendor engagement across all public sector OMCs."
  },
  {
    title: "Labour commission intervenes in IOCL wage negotiation case",
    date: "13 June 2025",
    tag: "Litigation",
    icon: <FaGavel className="text-red-500" />,
    summary:
      "Following worker union concerns, the Labour Commission has called for structured arbitration with IOCL management."
  }
];

export default function LegalPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full text-red-600 text-2xl">
              <FaBalanceScale />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white">
            Legal Mentions & Controversies
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A record of legal developments, regulatory interactions, and public policy matters involving IOCL.
          </p>
        </div>

        {/* Legal Cards */}
        <div className="space-y-6">
          {legalItems.map((item, idx) => (
              <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
              >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.date} • <span className="font-semibold">{item.tag}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
