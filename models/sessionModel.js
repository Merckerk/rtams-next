import mongoose, { Schema, model, models } from "mongoose";
import { date } from "yup";

const sessionSchema = new Schema({
  classlist: {
    type: mongoose.Schema.ObjectId,
    ref: "classlist",
  },
  date: {
    type: String,
    required: [true, "date is required"],
  },
  firstTimeIn: {
    type: String,
  },
  lastTimeOut: {
    type: String,
  },
});

const Session = models.sessions || model("sessions", sessionSchema);

export default Session;