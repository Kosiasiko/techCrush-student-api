import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: [true, "Surname is required"],
  },
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  regno: {
    type: Number,
    required: [true, "Registration number is required"],
    unique: [true, "Reg No already exist"],
    cast: "{VALUE} is not a valid registration number. Registration number must be a number.",
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: [true, "Email address is already in use"],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
