import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "../context/entries";
import { UIContext } from "../context/ui";

import styles from "./Entrylist.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging()
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.draging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 150px)",
          overflow: "scroll",
          width: "100%",
          overflowX: "hidden",
          backgroundColor: "transparent",
          padding: 0.9,
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: "all .3s ease-out ",
          }}
        >
          {entriesByStatus.map((entry, index) => (
            <EntryCard key={index} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
