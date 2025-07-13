import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 text-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center text-yellow-500 text-6xl mb-4">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-5xl font-bold text-blue-800 dark:text-white mb-2">404</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          Oops. The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/dashboard"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded transition"
        >
          Go Back to Dashboard
        </Link>
      </div>
    </div>
  );
}