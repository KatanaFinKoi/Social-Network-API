const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});


app.listen(3000, () => console.log('Server is running on port 3000'));
