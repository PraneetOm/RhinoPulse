import express from 'express';
import axios from 'axios';

const router = express.Router();

let cachedTweets = null;
let lastFetch = null;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

router.get('/', async (req, res) => {
  const query = req.query.q || 'Indian Oil Corporation';

  const cacheValid = cachedTweets && Date.now() - lastFetch < CACHE_DURATION;
  if (cacheValid) return res.json({ tweets: cachedTweets });

  try {
    const response = await axios.get('https://twitter-api45.p.rapidapi.com/search_communities_latest.php', {
      params: { query },
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
      }
    });

    const tweets = response.data; // it's already an array

    cachedTweets = tweets;
    lastFetch = Date.now();

    res.json({ tweets });
  } catch (error) {
    console.error('🧨 Twitter fetch failed:', error.message);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
});

export default router;
