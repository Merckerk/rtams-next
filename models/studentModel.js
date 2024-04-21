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
    type: mongoose.Schema.ObjectId,
    ref: "sections",
  },
  load: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "courses",
    },
  ],
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Please provide a gender"],
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  placeOfBirth: {
    type: String,
    required: false,
  },
  residentialAddress: {
    type: String,
    required: false,
  },
  permanentAddress: {
    type: String,
    required: false,
  },
  nameOfSpouse: {
    type: String,
    required: false,
  },
});

const Student = models.students || model("students", studentSchema);

export default Student;
