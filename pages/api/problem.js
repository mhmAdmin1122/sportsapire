import { Problem } from "@/models/problem";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();
  //   if(method === "GET"){
  //     res.json(await Problem.find())
  //   }
  if (method === "POST") {
    const { fname, email, pnumb, message } = req.body;
    const ProblemDoc = await Problem.create({
      fname,
      email,
      pnumb,
      message,
    });
    res.json(ProblemDoc);
  }
}
