import List from "@mui/material/List";
import React from "react";
import { TodoItems } from "./TodoItems";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onDeleteTodo: DeleteTodo;
  editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onDeleteTodo,
  editTodo,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItems
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onDeleteTodo={onDeleteTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
};
