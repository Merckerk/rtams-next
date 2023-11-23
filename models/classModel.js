import mongoose, { Schema, model, models } from "mongoose";

const classSchema = new Schema({
  className: {
    // Name of the subject
    type: String,
    required: true,
  },
  classCode: {
    // Subject code
    type: String,
    required: true,
    unique: true,
  },
  professor: {
    // Professor assigned to the class
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  students: [
    // Students enrolled in the class
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  schedule: {
    // Class schedule
    days: {
      // Days when the class occurs, e.g. [Monday, Wednesday, Friday]
      type: [String],
      required: true,
    },
    startTime: {
      // Start time of the class
      type: String,
      required: true,
    },
    endTime: {
      // Time when the class ends
      type: String,
      required: true,
    },
  },
});

const Class = model("classes", classSchema);
