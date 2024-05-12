import mongoose, { Schema, model, models } from "mongoose";

const classlistSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  sectionCode: {
    type: mongoose.Schema.ObjectId,
    ref: "sections",
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectDescription: {
    type: String,
    required: true,
  },
  term: {
    type: mongoose.Schema.ObjectId,
    ref: "terms",
    required: true,
  },
  schedule: {
    type: String,
    required: false,
  },
  flagged: {
    type: Boolean,
    default: false,
  },
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "students",
    },
  ],
});

const Classlist = models.classlists || model("classlists", classlistSchema);

export default Classlist;
