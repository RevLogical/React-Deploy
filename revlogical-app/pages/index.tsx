import { Todo } from "../utils/types";
import Link from "next/link";

import {
  VStack,
  Box,
  HStack,
  Text,
  StackDivider,
  Heading,
  Spacer,
  Flex,

} from "@chakra-ui/react";

// Define the component props
interface IndexProps {
  todos: Array<Todo>
};

function TodoItem(todo: Todo) {
  return (
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      flex='1'
      borderRadius='md'
    >
      <Heading fontSize='xl'>{todo.title}</Heading>
      <Text mt={4}>{todo.description}</Text>
    </Box>
  )
}

// Define the page component
const Index = (props: IndexProps) => {
  const { todos } = props;

  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='center'
    >
      <Heading mt='5'>Todo List</Heading>
      <Box>
        <Flex >
          <Box p='4' justifyContent='center' alignItems='center'>
            <Heading as='h4'>Todo</Heading>
          </Box>
          <Spacer/>
          <Box p='4' justifyContent='center' alignItems='center'>
            <Heading as='h4'>Complete</Heading>
          </Box>
        </Flex>
      </Box>
      <HStack spacing={8} divider={<StackDivider borderColor='gray.200' />} >
        <Box>
          <Box mt='5'>
            {/* mapping over todos */}
            {todos.map(todo => {
              if (!todo.completed) {
                return TodoItem(todo);
              }
            })}
          </Box>
        </Box>
        <Box>
          <Box mt='5'>
            {/* mapping over todos */}
            {todos.map(todo => {
              if (todo.completed) {
                return TodoItem(todo);
              }
            })}
          </Box>
        </Box>
      </HStack>
    </VStack>
  )
}

// Get props for server side rendering
export async function getServerSideProps() {
  // Get todo data from API
  const res = await fetch(process.env.API_URL as string);
  const todos = await res.json();

  // Return props
  return {
    props: { todos },
  }
};

export default Index;