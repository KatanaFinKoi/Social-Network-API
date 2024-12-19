import User from "../Models/User.js";


const getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  try {
    const users = await User.find(); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

export { getAllUsers, addUser };