import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import { EntriesContext } from "../context/entries";
import { UIContext } from "../context/ui";

export const NewEntry = () => {
  //const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const { addNewEntry } = useContext(EntriesContext);
  const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            multiline
            autoFocus
            value={inputValue}
            label="Agregar entrada"
            onChange={onFieldChanged}
            placeholder="Nueva Entrada"
            sx={{ marginTop: 2, marginBottom: 1 }}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
            helperText={
              inputValue.length <= 0 && touched && "Ingrese una tarea"
            }
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={onSave}
              endIcon={<SaveAsIcon />}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          fullWidth
          onClick={() => setIsAddingEntry(true)}
          startIcon={<PlaylistAddCircleIcon />}
        >
          Agregar una tarea
        </Button>
      )}
    </Box>
  );
};
