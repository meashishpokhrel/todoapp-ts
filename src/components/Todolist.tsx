import List from "@mui/material/List";
import { Box } from "@mui/system";
import React from "react";
import { TodoItems } from "./TodoItems";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItems
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
};
