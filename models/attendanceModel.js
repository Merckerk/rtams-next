import mongoose, { Schema, model, models } from "mongoose";
import { stringify } from "postcss";
import { date } from "yup";

const attendanceSchema = new Schema({
  nfcUID: {
    type: String,
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  studentName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: mongoose.Schema.ObjectId,
    ref: "courses",
  },
  date: {
    type: String,
    required: [true, "date is required"],
  },
  term: {
    type: String,
    required: [true, "term is required"],
  },
  section: {
    type: String,
    required: [true, "section is required"],
  },
  timeIn: {
    type: String,
  },
  timeOut: {
    type: String,
  },
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
