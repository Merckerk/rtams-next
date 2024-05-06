import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  //will be stored in an admin table
  image: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    // required: [true, "Please provide a name"],
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = models.users || model("users", userSchema);

export default User;
