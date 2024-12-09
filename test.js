
import User from './Models/user.js';
import Thought from './Models/thought.js';
import mongoose from 'mongoose';

connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const runTest = async () => {
  try {

    await deleteMany({});
    await _deleteMany({});


    const user = await create({
      username: 'johndoe',
      email: 'john@example.com',
    });

    console.log('User created:', user);


    const thought = await _create({
      thoughtText: 'This is a test thought!',
      username: 'johndoe',
    });

    console.log('Thought created:', thought);


    thought.reactions.push({
      reactionBody: 'Great thought!',
      username: 'janedoe',
    });

    await thought.save();
    console.log('Updated thought with reaction:', thought);


    user.friends.push(user._id); 
    await user.save();
    console.log('Updated user with friend:', user);
  } catch (err) {
    console.error(err);
  } finally {
    connection.close();
  }
};

runTest();
