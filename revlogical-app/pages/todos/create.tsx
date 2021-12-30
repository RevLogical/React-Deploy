import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { Todo } from "../../utils/types";

// Define props
interface CreateProps {
  url: string;
}

// Define component
const Create = (props: CreateProps) => {
  // Get the next router
  const router = useRouter();

  // Since there is juse onte input we will use an uncontrolled form
  const title = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);

  // Function to create new Todo
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    // construct new todo, create variable, check if item.current is not null to pass type checks
    let todo: Todo = { title: "", description: "", completed: false };
    if (null !== title.current && null !== desc.current) {
      todo = { title: title.current.value, description: desc.current.value, completed: false };
    }

    // Make the API request
    await fetch(props.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    // After api request, push back to main page
    router.push("/");
  }

  return (
    <div>
      <h1>Create a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={title}></input>
        <input type="text" ref={desc}></input>
        <input type="submit" value="create todo"></input>
      </form>
    </div>
  )
}

// export getStaticProps to provide API_URL to component
export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL,
    },
  }
}

export default Create;