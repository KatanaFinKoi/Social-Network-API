const { connect, connection } = pkg
import pkg from 'mongoose';
import express, { json } from 'express';
import userRoutes from './routes/api/userRoutes.js';
import thoughtRoutes from './routes/api/thoughtRoutes.js';
const app = express();

// const server = () => {
  app.use(json());


  connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  });

  connection.once('open', () => {
    console.log('Connected to MongoDB');
  });



  app.use('/api/users', userRoutes);
  app.use('/api/thoughts', thoughtRoutes);


  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// }

// export default server;
