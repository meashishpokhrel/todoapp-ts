import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoContainer: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <Grid spacing={1} direction="row" container>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            value={newTodo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
