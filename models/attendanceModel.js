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
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "classlists",
  },
  date: {
    type: String,
    required: [true, "date is required"],
  },
  timeIn: {
    type: String,
  },
  timeOut: {
    type: String,
  },
  hoursRendered: {
    type: Number,
    default: 0,
  },
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
