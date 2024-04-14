import mongoose, { Schema, model, models } from "mongoose";

const termSchema = new Schema({
  term: {
    type: String,
    required: [true, "Term Name Required"],
  },
});

const Term = models.terms || model("terms", termSchema);

export default Term;
