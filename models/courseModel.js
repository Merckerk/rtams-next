import mongoose, { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
    unique: true,
  },
  courseCode: {
    type: String,
    required: true,
    unique: true,
  },
});

const Course = models.courses || model("courses", courseSchema);

export default Course;
