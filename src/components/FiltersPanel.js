import FilterField from "../components/FilterField";
import Button from "../components/Button";
import styles from "./FiltersPanel.module.css";
import { useState } from "react";

const FiltersPanel = ( {applyFilter} ) => {
  const [senderFieldValue, setSenderFieldValue] = useState(null);
  const [topicFieldValue, setTopicFieldValue] = useState(null);
  const [subtopicFieldValue, setSubtopicFieldValue] = useState(null);
  const [bodyValue, setBodyValue] = useState(null);

  const handleChange = (fieldNum, newValue) => {
    if (fieldNum == 1) setTopicFieldValue(newValue);
    else if (fieldNum == 2) setSubtopicFieldValue(newValue);
    else if (fieldNum == 3) setSenderFieldValue(newValue);
  } 

  return (
    <div className={styles.filterspanel}>
      <b className={styles.filterstext}>Filters</b>
      <FilterField
        label="Sender"
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
        handleChange={(newValue) => handleChange(3, newValue)}
      />
      <FilterField
        label="Topic"
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
        handleChange={(newValue) => handleChange(1, newValue)}
      />
      <FilterField
        label="Subtopic"
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
        handleChange={(newValue) => handleChange(2, newValue)}
      />
      <Button buttonText="Filter" onClick={() => applyFilter(senderFieldValue, topicFieldValue, subtopicFieldValue)}/>
    </div>
  );
};

export default FiltersPanel;
