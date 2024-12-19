import server from './server.js';
import User from './Models/User.js';
import Thought from './Models/Thought.js';
import { getRandomName, getRandomThoughts, getThoughtReactions } from './data.js';

server.connect('error', (err) => console.error('Server error:', err));


server.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await server.db?.listCollections({ name: 'thought' }).toArray();
  if (thoughtCheck?.length) {
    await server.dropCollection('thoughts');
  }

  let userCheck = await server.db?.listCollections({ name: 'user' }).toArray();
  if (userCheck?.length) {
    await server.dropCollection('users');
  }

  let reactionCheck = await server.db?.listCollections({ name: 'reaction' }).toArray();
  if (reactionCheck?.length) {
    await server.dropCollection('reaction');
  }

  const users = [];
  const thoughts = getRandomThoughts(10);
  const reactions = getThoughtReactions(10);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const email = `${fullName.split(' ')[0].toLowerCase()}@gmail.com`;
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const friends = [];

    users.push({
      first,
      last,
      email,
      friends,
      // age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.insertMany(users);
  await Thought.insertMany(thoughts);
  await Thought.insertMany(reactions);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
