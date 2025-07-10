import express from 'express';
import Project from '../models/Project.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// POST /api/projects/add
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const project = new Project({ title, description, status });
    await project.save();
    res.status(201).json({ message: 'Project added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
