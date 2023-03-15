import { Container } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { TodoList } from "./components/Todolist";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { text: "Please Add your", complete: false },
    { text: "Todo Here !", complete: true },
  ]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    console.log(todoToEdit);
    console.log(todos);
    let updatedTodos: Array<Todo> = todos.map((todo) => {
      if (todo.text === todoToEdit.text) {
        return { ...todoToEdit, text: todoToEdit?.newText || todo.text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoContainer addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </Container>
  );
}

export default App;
