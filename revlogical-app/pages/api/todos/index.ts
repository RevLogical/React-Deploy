import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Capture request method, we type it as a key of ResponseFuncs to reduce typing
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  // Function for catching errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Database connection
  const { connection, Todo } = await connect();
  
  // Potential Responses
  const handleCase: ResponseFuncs = {
    // Response for GET requests
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Todo.find({}).catch(catcher))
    },
    // Response POST Requests
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Todo.create(req.body).catch(catcher))
    },
  }

  // Check if there is a response for the particular method, if so invoke it.
  // If not respond with an error
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "Could not handle this request." });
}

export default handler;