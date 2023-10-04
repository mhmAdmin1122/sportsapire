import { model, Schema, models } from "mongoose";

const ContactSchema = new Schema({
  fname: { type: String, required: true },
  email: { type: String, required: true },
  pnumb: { type: String, required: true },
  message: { type: String, required: true },
});

export const Contact = models.Contact || model("Contact", ContactSchema);
