const userModel = require('../models/userModel');

// create user
const createUser = async (req, res) => {
  try {
    const { surname, firstname, email, password, regno } = req.body;
    const user = new userModel({ surname, firstname, email, password, regno });
    await user.save();
    res.status(201).json({
        message: 'User created successfully✅✔🎉🎉',
        data: user
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Single User
const getSingleUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User retrieved successfully✅✔🎉🎉',
      data: user
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return    res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User updated successfully✅✔🎉🎉',
      data: user
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return    res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User deleted successfully✅✔🎉🎉',
      data: user
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 

module.exports = {createUser, getSingleUser, updateUser, deleteUser};