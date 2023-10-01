import { model, Schema, models } from "mongoose";

const ChannelSchema = new Schema({
  channelName: { type: String, required: true },
  channelDesc: { type: String, required: true },
  pic: { type: String, required: true },
  country: { type: String, required: true },
  url: { type: String, required: true },
});

export const Channel = models.Channel || model("Channel", ChannelSchema);
