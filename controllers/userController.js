import find from '../Models/User.js';


const getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  try {
    const users = await find(); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
};

export default getAllUsers;