import Thought from '../Models/Thought.js';


const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving thoughts', error: err });
  }
};

const addThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: 'Error creating thought', error: err });
  }
};



export { getAllThoughts, addThought };
