import mongoose, { Schema, model, models } from "mongoose";

const Section = {
  "4-1": "4-1",
  "4-2": "4-2",
  "4-3": "4-3",
  "4-4": "4-4",
  "4-5": "4-5",
};

const studentSchema = new Schema({
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
  image: {
    type: String,
    default: "",
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
