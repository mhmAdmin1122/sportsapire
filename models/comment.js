import { model, Schema, models } from "mongoose";

const CommentSchema = new Schema({
    comment: { type: String, required: true }
});

export const Comment = models.Comment || model("Comment", CommentSchema);
