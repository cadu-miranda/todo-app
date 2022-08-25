import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";

type ITodoProps = {
  todo: string;
  todos: string[];
  setTodos: Dispatch<SetStateAction<string[]>>;
  index: number;
};

export const Todo = ({ todo, index, todos, setTodos }: ITodoProps) => {
  const deleteTodo = (index: number) => {
    const newList = [...todos];

    newList.splice(index, 1);

    setTodos(newList);
  };

  return (
    <Button
      w={["80%", "fit-content"]}
      h={"40px"}
      onClick={() => deleteTodo(index)}
      style={{
        backgroundColor: "transparent",
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
        border: "2px solid #fff",
      }}
    >
      {todo}
    </Button>
  );
};
