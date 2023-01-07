import { useMemo } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./FilterField.module.css";
import { useState } from "react";
// import { forwardRef } from "react";

const FilterField = ({
  titleFieldWidth,
  titleFieldBoxSizing,
  titleFieldAlignSelf,
  label,
  placeholder,
  handleChange
}) => {
  let [inputValue, setInputValue] = useState('');
  
  const titleFieldStyle = useMemo(() => {
    return {
      width: titleFieldWidth,
      boxSizing: titleFieldBoxSizing,
      alignSelf: titleFieldAlignSelf,
    };
  }, [titleFieldWidth, titleFieldBoxSizing, titleFieldAlignSelf]);

  const getValue = () => {
    return inputValue;
  };
  return (
    <div className={styles.titlefield} style={titleFieldStyle}>
      <Autocomplete
        className={styles.filtertextbox}
        onChange={(e, newValue) => handleChange(newValue)}
        disablePortal
        options={["ARRAU", "Default"]}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            label={label}
            variant="outlined"
            placeholder={placeholder}
            helperText=""
          />
        )}
        size="small"
      />
    </div>
  );
};

export default FilterField;
