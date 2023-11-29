import mongoose, { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema({
  student: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  courseCode: {
    type: mongoose.Schema.ObjectId,
    ref: "courses",
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  term: {
    type: String,
  },
  section: {
    type: String,
  },
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
