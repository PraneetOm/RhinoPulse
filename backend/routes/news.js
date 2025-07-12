import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const query = req.query.q || 'Indian Oil Corporation';

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        sortBy: 'publishedAt',
        language: 'en',
        pageSize: 10,
        apiKey: process.env.NEWS_API_KEY // ✅ this must be in params
      }
    });
    console.log(process.env.NEWS_API_KEY);
    res.json(response.data);
  } catch (error) {
    console.error('🧨 FULL ERROR:', {
        status: error?.response?.status,
        data: error?.response?.data,
        message: error.message,
    });
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
});

export default router;
