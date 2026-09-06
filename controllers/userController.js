import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

// create user
const createUser = async (req, res) => {
  try {
    const { surname, firstname, email, password, regno } = req.body;
    // confirm if user exist
    const existingUser = await userModel.findOne({
      $or: [{ email }, { regno }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User email or regno already exists" });
    }

    // const existingRegNo = await userModel.findOne({ regno });

    // if (existingRegNo) {
    //   return res.status(400).json({ error: "User reg no already exists" });
    // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      surname,
      firstname,
      email,
      password: hashedPassword,
      regno,
    });
    await user.save();
    res.status(201).json({
      message: "User created successfully✅✔🎉🎉",
      data: user,
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
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User retrieved successfully✅✔🎉🎉",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully✅✔🎉🎉",
      data: user,
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
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User deleted successfully✅✔🎉🎉",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createUser, getSingleUser, updateUser, deleteUser };
