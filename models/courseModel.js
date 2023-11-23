import mongoose, { Schema, model, models } from "mongoose";

const term = {  
  "2023-2024": "2023-2024",
  "2024-2025": "2024-2025",
  "2025-2026": "2025-2026",
  "2026-2027": "2026-2027",
};

const courseSchema = new Schema({
  courseName: {
    // Name of the course
    type: String,
    required: true,
    unique: true,
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
  },
  term: {
    type: String,
    enum: Object.values(term),
  },
});

const Course = models.users || model("courses", courseSchema);

export default Course;
