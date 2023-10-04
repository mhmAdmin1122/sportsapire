import { model, Schema, models } from "mongoose";

const ProblemSchema = new Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const Problem = models.Problem || model("Problem", ProblemSchema);
