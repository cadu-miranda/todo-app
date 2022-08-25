import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Todo } from "../components/Todo";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <Stack backgroundColor={"#601d9e"} h={"100vh"} p={3}>
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "32px",
          marginTop: 4,
        }}
      >
        Todo App
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          focusBorderColor="none"
          _placeholder={{ color: "#fff" }}
          className="todoInput"
          minLength={1}
          maxLength={50}
          placeholder="Enter your todo"
          width={"80%"}
          height={"40px"}
          p={"6px 12px"}
          style={{
            border: "1px solid #fff",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Button
          type="submit"
          disabled={text === ""}
          h="40px"
          w="20%"
          style={{
            backgroundColor: "transparent",
            borderRadius: "8px",
            color: "#fff",
            cursor: text === "" ? "default" : "pointer",
            border: "2px solid #fff",
          }}
        >
          Add
        </Button>
      </form>

      <Box overflowY="auto" p={3}>
        <Center>
          <VStack w="100vw">
            {todos?.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  todo={todo}
                  index={index}
                  setTodos={setTodos}
                  todos={todos}
                />
              );
            })}
          </VStack>
        </Center>
      </Box>
    </Stack>
  );
};

export default Home;
