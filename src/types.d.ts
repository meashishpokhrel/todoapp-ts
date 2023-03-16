type Todo = {
  text: string;
  complete: boolean;
};

type AddTodo = (newTodo: string) => void;
type DeleteTodo = (id: number) => void;
type EditTodo = (id: number, newText: string) => void;
type ToggleComplete = (id: number) => void;