import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
const port = 8080;
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

mongoose.connect('mongodb+srv://ankitrajbarhiya51:ankit4899@zerodhaclonecluster.mjsvx.mongodb.net/iocl').then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
});
