import mongoose, { Schema, model, models } from "mongoose";

const sectionSchema = new Schema({
  section: {
    type: String,
    required: [true, "Section Name Required"],
  },
});

const Section = models.sections || model("sections", sectionSchema);

export default Section;
