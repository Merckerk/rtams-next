import mongoose, { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
  courseName: {
    // Name of the course
    type: String,
    required: true,
  },
  courseCode: {
    // Subject code
    type: String,
    required: true,
    unique: true,
  },
  professor: {
    // Professor assigned to the course
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  students: [
    // Students enrolled in the course
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  // Class schedule
  days: {
    // Days when the class occurs, e.g. [Monday, Wednesday, Friday]
    type: [String],
    required: true,
  },
});


//TODO: TITE
const Course = model("classes", courseSchema);
