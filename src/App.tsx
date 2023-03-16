import { Container } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { TodoList } from "./components/Todolist";

const App = () => {

  const [todos, setTodos] = useState<Array<Todo>>([
    { text: "Please Add all your", complete: false },
    { text: "Todo's Here ! Enjoy !", complete: true },
  ]);

  const toggleComplete: ToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo, idx) => {
      if (idx === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([{ text: newTodo, complete: false }].concat([...todos, ]));
    }
  };

  const deleteTodo: DeleteTodo = (id: number) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo, idx) => idx != id
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (id, newText) => {
    let updatedTodos: Array<Todo> = todos.map((todo, idx) => {
      if (idx === id) {
        return { ...todo, text: newText };
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
        onDeleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </Container>
  );
}

export default App;