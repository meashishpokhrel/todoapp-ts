type Todo = {
  text: string;
  complete: boolean;
  newText?: string;
}

type AddTodo = (newTodo: string) => void;
type DeleteTodo = (todoToDelete: Todo) => void;
type EditTodo = (todoToEdit: Todo) => void;
type ToggleComplete = (selectedTodo: Todo) => void;