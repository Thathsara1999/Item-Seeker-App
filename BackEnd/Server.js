const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();

const itemRoutes = require('./routes/ItemRouts');
const authroutes =require('./routes/authRoutes');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
};

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Routes
app.use('/api', itemRoutes); // Using '/api' as a prefix for all routes in itemRoutes
app.use('/api',authroutes);
app.use(errorHandler);

// MongoDB connection
const mongoURI = 'mongodb+srv://nawanka:LYGxfOGL6gADnTbx@nawanka.izovugo.mongodb.net/?retryWrites=true&w=majority&appName=Nawanka';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
