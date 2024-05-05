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
  checked: {
    type: Boolean,
    default: false,
  },
});

const Session = models.sessions || model("sessions", sessionSchema);

export default Session;
