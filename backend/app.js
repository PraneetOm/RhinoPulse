import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRoutes from './routes/news.js';
import socialRoutes from './routes/social.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://rhinopulse.netlify.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(cors());
app.use(express.json());
app.use('/api/news', newsRoutes);
app.use('/api/social', socialRoutes);

// Routes
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
const port = 8080;
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

mongoose.connect('mongodb+srv://ankitrajbarhiya51:ankit4899@zerodhaclonecluster.mjsvx.mongodb.net/iocl').then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
});