import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";

    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "Password too short.";

    if (!cnfPassword) newErrors.cnfPassword = "Confirm password is required.";
    else if (cnfPassword != password) newErrors.cnfPassword = "Password and confirm password must match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post(`${baseUrl}/api/users/register`, { name, email, password });
        alert('Registration successful! Please login.');
        navigate('/');
      } catch (err) {
        alert('Registration failed');
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between px-4 p-2 bg-[#002060] shadow sticky top-0 z-50">
          <div className="flex items-center space-x-3 group">
            <img src="/iocl-logo.png" alt="IOCL Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-xl font-extrabold tracking-wide drop-shadow-md text-orange-500">RhinoPulse</h1>
              <p className="text-xs font-semibold tracking-wide drop-shadow-md text-white transition group-hover:text-orange-400">Powered by Indian Oil Corporation Limited</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="max-w-6xl w-full flex flex-col md:flex-row bg-[#002060] shadow-lg rounded-2xl overflow-hidden border border-orange-400 relative">
            {/* Left: Rhino Ji */}
            <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-8 relative z-10">
              <img
                src="/rhino.png"
                alt="Indian Oil Rhino"
                className="w-72 h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl"
              />
            </div>

            {/* Right: Register Form */}
            <div className="md:w-1/2 p-10 relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Create an Account</h2>
              <form className="space-y-5" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium text-white">Full Name</label>
                  <input
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg bg-white text-[#002060]"
                    placeholder="Tony Stark"
                  /> {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg bg-white text-[#002060]"
                    placeholder="you@example.com"
                  /> {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Password</label>
                  <input
                    type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg bg-white text-[#002060]"
                    placeholder="••••••••"
                  /> {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Confirm Password</label>
                  <input
                    type="password"
                    value={cnfPassword} 
                    onChange={e => setCnfPassword(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg bg-white text-[#002060]"
                    placeholder="••••••••"
                  /> {errors.cnfPassword && <p className="text-sm text-red-500">{errors.cnfPassword}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Register
                </button>
              </form>
              <p className="mt-6 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/" className="text-orange-500 font-semibold cursor-pointer hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}