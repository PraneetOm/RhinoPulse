import express from 'express';
import axios from 'axios';

const router = express.Router();

// in-memory cache
let cachedArticles = null;
let cacheTimestamp = null;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

router.get('/', async (req, res) => {
  const query = req.query.q || 'Indian Oil Corporation';

  const isCacheValid = cachedArticles && (Date.now() - cacheTimestamp < CACHE_DURATION);

  if (isCacheValid) {
    console.log('Serving news from cache');
    return res.json({ articles: cachedArticles });
  }

  try {
    console.log('🌐 Fetching fresh news from GNews API');
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        lang: 'en',
        country: 'in',
        max: 10,
        token: process.env.GNEWS_API_KEY
      }
    });

    cachedArticles = response.data.articles;
    cacheTimestamp = Date.now();

    res.json({ articles: cachedArticles });
  } catch (error) {
    console.error('GNews fetch error:', {
      status: error?.response?.status,
      data: error?.response?.data,
      message: error.message
    });

    // fallback: send old cached data even if expired
    if (cachedArticles) {
      console.warn('⚠️ Serving stale cached news due to API failure');
      return res.json({ articles: cachedArticles });
    }

    res.status(500).json({
      error: 'Failed to fetch GNews articles',
      details: error.message
    });
  }
});

export default router;
