import { FeedBack } from "@/models/feedback";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();
  //   if(method === "GET"){
  //     res.json(await FeedBack.find())
  //   }
  if (method === "POST") {
    const { message } = req.body;
    const contactsDoc = await FeedBack.create({
      message,
    });
    res.json(contactsDoc);
  }
}
