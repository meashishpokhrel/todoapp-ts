import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoItems: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    setIsEditOn(!isEditOn);
    if (isEditOn) {
      editTodo({
        text: todo.text,
        complete: todo.complete,
        newText: inputText,
      });
    }
  };

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          color="primary"
          edge="start"
          checked={todo.complete}
          tabIndex={-1}
          disableRipple
          onChange={() => toggleComplete(todo)}
        />
      </ListItemIcon>
      {!isEditOn ? (
        <>
          <ListItemText
            primary={`${todo.text}`}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
          />
          <ListItemIcon>
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit()}>
              <EditIcon />
            </IconButton>
          </ListItemIcon>
        </>
      ) : (
        <>
          <TextField
            variant="outlined"
            value={inputText}
            onChange={onTodoUpdate}
            placeholder="Edit Todo"
          />
          <ListItemIcon>
            <IconButton onClick={() => onEdit()} edge="end" aria-label="delete">
              <SaveIcon />
            </IconButton>
          </ListItemIcon>
        </>
      )}

      <ListItemSecondaryAction>
        <IconButton onClick={() => onDelete()} edge="end" aria-label="delete">
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
