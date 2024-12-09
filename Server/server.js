import { connect, connection } from 'mongoose';
import express, { json } from 'express';
const app = express();


app.use(json());


connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});


import userRoutes from './routes/api/userRoutes';
import thoughtRoutes from './routes/api/thoughtRoutes';

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
