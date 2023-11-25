import { Schema, model, models } from "mongoose";

const Term = {
  "2023-2024": "2023-2024",
  "2024-2025": "2024-2025",
  "2025-2026": "2025-2026",
  "2026-2027": "2026-2027",
  "2027-2028": "2027-2028",
};

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
  term: {
    type: String,
    enum: Object.values(Term),
  },
});

const Course = models.courses || model("courses", courseSchema);

export default Course;
