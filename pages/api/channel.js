import { Channel } from "@/models/channel";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();
  if(method === "GET"){
    res.json(await Channel.find().limit(20))
  }
  if (method === "POST") {
    const { channelName, channelDesc, pic, country, url } = req.body;
    const contactsDoc = await Channel.create({
      channelName,
      channelDesc,
      pic,
      country,
      url,
    });
    res.json(contactsDoc);
  }
}
