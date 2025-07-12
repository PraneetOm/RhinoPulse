import express from 'express';
import axios from 'axios';

const router = express.Router();

// GET /api/news?q=Indian Oil Corporation
router.get('/', async (req, res) => {
  const query = req.query.q || 'Indian Oil Corporation';

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        sortBy: 'publishedAt',
        language: 'en',
        pageSize: 10,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
});

export default router;