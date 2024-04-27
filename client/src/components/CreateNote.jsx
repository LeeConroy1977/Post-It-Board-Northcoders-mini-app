import { useState } from "react";
import styles from "../styles/createNote.module.css";
import Form from "./Form";
import Preview from "./Preview";

const initalObj = {
  task: "",
  colour: "#feff9c",
};

const CreateNote = () => {
  const [newNoteObj, setNewNoteObj] = useState(initalObj);
  console.log(newNoteObj);
  return (
    <div className={styles.createNote}>
      <Preview newNoteObj={newNoteObj} />
      <Form newNoteObj={newNoteObj} setNewNoteObj={setNewNoteObj} />
    </div>
  );
};

export default CreateNote;
