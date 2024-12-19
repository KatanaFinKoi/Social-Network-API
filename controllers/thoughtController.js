import Thought from '../Models/Thought.js';


const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
    console.log('getting all thoughts')
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving thoughts', error: err });
  }
};

const addThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.json(thought);
    console.log('adding thought')
  } catch (err) {
    res.status(500).json({ message: 'Error creating thought', error: err });
  }
};

const addReaction = async (req, res) => {
  try {
    const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
    res.json(reaction);
    console.log('adding reaction')
  }
  catch (err) {
    res.status(500).json({ message: 'Error adding reaction', error: err });
  }
};

const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(thought);
    console.log('updating thought')
  } catch (err) {
    res.status(500).json({ message: 'Error updating thought', error: err });
  }
};

const updateReaction = async (req, res) => {
  try {
    const reaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId, 'reactions._id': req.params.reactionId },
      { $set: { 'reactions.$': req.body } },
      { new: true }
    );
    res.json(reaction);
    console.log('updating reaction')
  } catch (err) {
    res.status(500).json({ message: 'Error updating reaction', error: err });
  }
};

const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    res.json(thought);
    console.log('deleting thought')
  } catch (err) {
    res.status(500).json({ message: 'Error deleting thought', error: err });
  }
}

const deleteReaction = async (req, res) => {
  try {
    const reaction = await Thought.findByIdAndDelete(req.params.thoughtId, 
      { _id: req.params.thoughtId, 'reactions._id': req.params.reactionId },
      { $set: { 'reactions.$': req.body } },
      { new: true });
    res.json(reaction);
    console.log('deleting reaction')
  } catch (err) {
    res.status(500).json({ message: 'Error deleting reaction', error: err });
  }
};


export { getAllThoughts, addThought, updateThought, deleteThought, addReaction, updateReaction, deleteReaction };
