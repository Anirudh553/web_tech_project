const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// Connect to MongoDB (local or MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/clubManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

// Mongoose Club schema and model
const clubSchema = new mongoose.Schema({
  name: String,
  backgroundImage: String,
  essentials: String,
});

const Club = mongoose.model('Club', clubSchema);

// Endpoint to get all clubs
app.get('/api/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to add a new club
app.post('/api/clubs', async (req, res) => {
  const { name, backgroundImage, essentials } = req.body;

  const newClub = new Club({
    name,
    backgroundImage,
    essentials,
  });

  try {
    const savedClub = await newClub.save();
    res.status(201).json(savedClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

