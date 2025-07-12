import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const query = req.query.q || 'Indian Oil Corporation';

  try {
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        lang: 'en',
        country: 'in',
        max: 10,
        token: process.env.GNEWS_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('🧨 GNews fetch error:', {
      status: error?.response?.status,
      data: error?.response?.data,
      message: error.message
    });

    res.status(500).json({
      error: 'Failed to fetch GNews articles',
      details: error.message
    });
  }
});

export default router;
