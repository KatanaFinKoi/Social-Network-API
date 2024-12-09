import { connect, connection } from 'mongoose';
import User from './Models/User.js';
import Thought from './Models/Thought.js';

connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    await deleteMany({});
    await _deleteMany({});

    await create([
      { username: 'johndoe', email: 'john@example.com' },
      { username: 'janedoe', email: 'jane@example.com' },
    ]);

    await _create([
      { thoughtText: 'This is my first thought!', username: 'johndoe' },
      { thoughtText: 'Hello world!', username: 'janedoe' },
    ]);

    console.log('Dummy data inserted successfully!');
    connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();