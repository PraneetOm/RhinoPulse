import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import FeaturedNews from './Components/FeaturedNews';
import Categories from './Components/Categories';
import LiveFeed from './Components/LiveFeed';
import Footer from './Components/Footer';
import FeedbackForm from './Components/Feedback';
import DailyHighlight from './Components/DailyHighlight';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/projects', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err.response?.data || err.message);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <HeroSection />
      <DailyHighlight />
      <FeaturedNews />
      <Categories />
      <LiveFeed />
      <FeedbackForm />
      <Footer />
    </div>
  );
}