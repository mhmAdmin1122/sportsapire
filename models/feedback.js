import { model, Schema, models } from "mongoose";

const FeedBackSchema = new Schema({
  message: { type: String, required: true },
});

export const FeedBack = models.FeedBack || model("FeedBack", FeedBackSchema);
