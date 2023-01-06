import { TextField } from "@mui/material";
import Button from "../components/Button";
import styles from "./SolutionBox.module.css";
import UploadWidget from "./UploadWidget";

const SolutionBox = () => {
  return (
    <div className={styles.solutionbox}>
      <TextField
        sx={{ width: 781 }}
        color="primary"
        variant="outlined"
        multiline
        maxRows={5}
        label="Filter"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <div className={styles.buttonbar}>
        <Button buttonText="Attach Image" />
        <UploadWidget />
        <Button buttonText="Post" />
      </div>
    </div>
  );
};

export default SolutionBox;
