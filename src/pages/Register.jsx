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
        await axios.post('http://localhost:8080/api/users/register', { name, email, password });
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
        <header className="flex items-center justify-between px-4 p-2 bg-white shadow">
          <div className="flex items-center space-x-3">
            <img src="/iocl-logo.png" alt="IOCL Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-xl font-bold text-orange-700">RhinoPulse</h1>
              <p className="text-xs text-gray-500">Powered by Indian Oil. Curated by the Internet.</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Left: Rhino Ji */}
            <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-8">
              <img
                src="/rhino.png"
                alt="Indian Oil Rhino"
                className="w-72 h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl"
              />
            </div>

            {/* Right: Register Form */}
            <div className="md:w-1/2 p-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">Create an Account</h2>
              <form className="space-y-5" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Full Name</label>
                  <input
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg"
                    placeholder="Tony Stark"
                  /> {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg"
                    placeholder="you@example.com"
                  /> {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg"
                    placeholder="••••••••"
                  /> {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                  <input
                    type="password"
                    value={cnfPassword} 
                    onChange={e => setCnfPassword(e.target.value)}
                    className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg"
                    placeholder="••••••••"
                  /> {errors.cnfPassword && <p className="text-sm text-red-500">{errors.cnfPassword}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Register
                </button>
              </form>
              <p className="mt-6 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/" className="text-orange-600 font-semibold cursor-pointer hover:underline">
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