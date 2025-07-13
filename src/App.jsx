import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewsPage from './pages/Category Pages/NewsPage';
import SocialBuzzPage from './pages/Category Pages/SocialBuzzPage';
import StockMarketPage from './pages/Category Pages/StockMarketPage';
import VoicesPage from './pages/Category Pages/VoicesPage';
import PublicSentimentPage from './pages/Category Pages/SentimentPage';
import LegalPage from './pages/Category Pages/LegalPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/category/news-articles" element={<NewsPage />} />
      <Route path="/category/social-buzz" element={<SocialBuzzPage />} />
      <Route path="/category/stock-market" element={<StockMarketPage />} />
      <Route path="/category/voices-on-iocl" element={<VoicesPage />} />
      <Route path="/category/legal-mentions" element={<LegalPage />} />
      <Route path="/category/public-sentiment" element={<PublicSentimentPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;