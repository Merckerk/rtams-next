import mongoose, { Schema, model, models } from "mongoose";
import Section from "@enums/section";

const studentSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  studentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  nfcUID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  username: {
    type: String,
    required: [true, "Please provide a username."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
  section: {
    type: String,
    enum: Object.values(Section),
  },
  
});

const Student = models.students || model("students", studentSchema);

export default Student;
