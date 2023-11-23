import mongoose, { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema({
  studentNumber: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  name: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  section: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  nfcUID: {
    type: mongoose.Schema.ObjectId,
    ref: "students",
  },
  dateTime: {
    type: Date,
    required: true,
  },
  courseCode: {
    type: mongoose.Schema.ObjectId,
    ref: "courses",
  },
  term: {
    type: mongoose.Schema.ObjectId,
    ref: "courses",
  },
});

const AttendanceReport =
  models.attendance || model("attendance", attendanceSchema);

export default AttendanceReport;
