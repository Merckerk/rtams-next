import mongoose, { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema({
  nfcUID: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  courseCode: {
    type: mongoose.Schema.ObjectId,
    ref: "courses",
  },
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
