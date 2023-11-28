import mongoose, { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema({
  nfcUID: [
    {
      type: "String",
      required: true,
    },
  ],
  dateTime: [
    {
      type: Date,
      required: true,
    },
  ],
  courseCode: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "courses",
    },
  ],
  term: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "courses",
    },
  ],
});

const Attendances =
  models.attendances || model("attendances", attendanceSchema);

export default Attendances;
