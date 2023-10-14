import { Comment } from "@/models/comment";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();
  if(method === "GET"){
    res.json(await Comment.find())
  }
  if (method === "POST") {
    const { comment } = req.body;
    const commentDoc = await Comment.create({
        comment
    });
    res.json(commentDoc);
  }
}
