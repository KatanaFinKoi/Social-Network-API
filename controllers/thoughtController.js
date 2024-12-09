import { find } from '../Models/Thought.js';


const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving thoughts', error: err });
  }
};

export default { getAllThoughts };
