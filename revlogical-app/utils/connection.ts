import mongoose, { Model } from "mongoose";

// Connecting to mongoose (Get Database URI from .env.local)
const { DATABASE_URL } = process.env;

// Connection
export const connect = async () => {
  const connection = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err));
  
  console.log("Mongoose Connection Established.")

  // Our ToDo Schema
  const TodoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean,
  });

  // Our Todo Model
  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

  return { connection, Todo }
}

