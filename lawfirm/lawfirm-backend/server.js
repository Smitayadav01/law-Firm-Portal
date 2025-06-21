const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/booking', require('./routes/bookingRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch((err) => console.log(err));
