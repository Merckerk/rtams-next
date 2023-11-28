import { Schema, model, models } from "mongoose";
import Term from "@enums/term";

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
