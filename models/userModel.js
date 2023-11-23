import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  //will be stored in an admin table
  image: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  userId: {
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
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  load: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "courses",
    },
  ],
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = models.users || model("users", userSchema);

export default User;
