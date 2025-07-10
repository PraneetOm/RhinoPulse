import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['current', 'upcoming'] }
});

export default mongoose.model('Project', projectSchema);
