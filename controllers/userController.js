import User from "../Models/User.js";


const getAllUsers = async (req, res) => {
  console.log('getting all users')
  try {
    const users = await User.find(); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
};

const addUser = async (req, res) => {
  console.log('adding user')
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

const updateUser = async (req, res) => {
  console.log('updating user')
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
}

const deleteUser = async (req, res) => {
  console.log('deleting user')
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
}


export { getAllUsers, addUser, updateUser, deleteUser };