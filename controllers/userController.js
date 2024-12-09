import { find } from '../models/User';


const getAllUsers = async (req, res) => {
  try {
    const users = await find(); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
};

export default { getAllUsers };