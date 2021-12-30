import { Todo } from "../../utils/types";
import { useRouter } from "next/router";
import { useState } from "react";

// Define Prop Interface
interface ShowProps {
  todo: Todo,
  url: string
};

// Define component
function Show(props: ShowProps) {
  // Get the next router, so we can use router.push
  const router = useRouter();

  // Set the todo as state for modification
  const [todo, setTodo] = useState<Todo>(props.todo);

  // Function to complete a todo
  const handleComplete = async () => {
    if (!todo.completed) {
      // Make a copy of todo with completed set to true
      const newTodo: Todo = { ...todo, completed: true };

      // Make api call to change completed in database
      await fetch(props.url + "/" + todo._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        // Send copy of todo with property
        body: JSON.stringify(newTodo),
      });
      // Once data is updated update state so ui matches without needing to refresh
      setTodo(newTodo);
    }
    // If completed is already true we won't do anything
  }

  // Function for handling clicking the delete button
  const handleDelete = async () => {
    await fetch(props.url + "/" + todo._id, {
      method: "delete",
    });
    // Push user back to main page after deleting
    router.push("/");
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <h2>{todo.completed ? "completed" : "incomplete"}</h2>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </button>
    </div>
  )
}

// Define Server Side Props
export async function getServerSideProps(context: any) {
  // Fetch the todo, the param was received via context.query.id
  const res = await fetch(process.env.API_URL + "/" + context.query.id);
  const todo = await res.json();

  // Return the serverSideProps, the todo, and the url from our env variables for frontend api calls
  return { props: { todo, url: process.env.API_URL } }
}

export default Show;