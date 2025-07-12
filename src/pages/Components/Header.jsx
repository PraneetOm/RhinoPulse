import useDarkMode from './useDarkMode';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear auth token
    navigate('/'); // Redirect to login
  };

  return (
    <nav className="flex justify-between items-center bg-blue-900 dark:bg-blue-950 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/dashboard">
        <div className="flex items-center space-x-2">
          <img src="/iocl-logo.png" alt="IOCL" className="w-10 h-10" />
          <span className="text-2xl font-bold">RhinoPulse</span>
        </div>
      </Link>

      <span className="text-m font-medium text-orange-300">
        {time.toLocaleString()}
      </span>

      {/* Actions: Theme Toggle & Logout */}
      <div className="flex items-center space-x-3 ml-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-blue-800"
          title="Toggle Theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button
          onClick={handleLogout}
          className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}