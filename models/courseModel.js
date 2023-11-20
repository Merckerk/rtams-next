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
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  students: [
    // Students enrolled in the course
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  schedule: {
    // Class schedule
    days: {
      // Days when the class occurs, e.g. [Monday, Wednesday, Friday]
      type: [String],
      required: true,
    },
  },
});

const Course = model("classes", courseSchema);
