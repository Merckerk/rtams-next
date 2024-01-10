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
    required: [true, "date is required"],
  },
  time: {
    type: String,
    required: [true, "time is required"],
  },
  term: {
    type: String,
    required: [true, "term is required"],
  },
  section: {
    type: String,
    required: [true, "section is required"],
  },
  timeIn:{
    type: Date,
    required: [true, "time in req"]
  },
  timeOut:{
    type: Date
  }
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
