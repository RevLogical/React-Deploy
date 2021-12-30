import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Capture request method, we type it as a key of ResponseFunc to reduce typing
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  // Function to catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Grab Id from req.query (where next stores params)
  const id: string = req.query.id as string;

  // Connect to database
  const { connection, Todo } = await connect();

  // Potential Responses for /todos/:id
  const handleCase: ResponseFuncs = {
    // Response for GET Requests
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Todo.findById(id).catch(catcher));
    },

    // Response for PUT Requests
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Todo.findByIdAndUpdate(id, req.body, { new: true }).catch(catcher));
    },

    // Response for DELETE Requests
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Todo.findByIdAndRemove(id).catch(catcher));
    },
  }

  // Check if thre is a response for a particular method.
  // If so invoke it, if not respond with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "Could not handle this request." });
}

export default handler;