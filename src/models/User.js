
// File: models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  readingList: [
    {
      bookRefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      status: { type: String, enum: ['read', 'pending', 'in-progress'], required: true },
    },
  ],
});

export default mongoose.model('User', userSchema);
