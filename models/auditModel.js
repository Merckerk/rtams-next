import mongoose, { Schema, model, models } from "mongoose";

const auditSchema = new Schema({
  target: {
    type: String,
    required: [true, "Target Required"],
  },
  description: {
    type: String,
    required: [true, "Description required"],
  },
  oldData: {
    type: Schema.Types.Mixed,
    required: [true, "old data required"]
  },
  newData: {
    type: Schema.Types.Mixed,
    required: [true, "new data required"]
  },
  changeMade: {
    type: Date,
    default: Date.now,
  },
});

const Audits = models.audits || model("audits", auditSchema);
export default Audits;
