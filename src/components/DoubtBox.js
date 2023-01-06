import { TextField } from "@mui/material";
import FilterField from "../components/FilterField";
import Button from "../components/Button";
import UploadWidget from "../components/UploadWidget";
import styles from "./DoubtBox.module.css";
import { useState } from "react";

const DoubtBox = () => {
  const backend = "http://localhost:5000";
  const [titleFieldValue, setTitleFieldValue] = useState(null);
  const [topicFieldValue, setTopicFieldValue] = useState(null);
  const [subtopicFieldValue, setSubtopicFieldValue] = useState(null);
  const [bodyValue, setBodyValue] = useState(null);

  const getToken = () => {
    let token = JSON.parse(localStorage.getItem("userInfo")).token;
    let tokenString = "Bearer " + token;
    let config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": tokenString,
      }
    };
    return config;
  };

  const postDoubt = async () => {
    alert("Doubt is about to be posted .. ");
    
    let config = getToken();
    let d = new Date().toLocaleDateString();
    let t = new Date().toLocaleTimeString();
    let uID = JSON.parse(localStorage.getItem("userInfo")).id;
    let rID = 1;
    // put the stuff for extracting from the form
    config.method = "POST";
    config.body = JSON.stringify({
      username: JSON.parse(localStorage.getItem("userInfo")).username,
      roomID: rID,
      title: titleFieldValue,
      date: d,
      time: t,
      body: bodyValue,
      image: null,
      topic: "Default",
      subtopic: "Default"
    });
    let url = backend+"/api/doubts/"+rID.toString();
    console.log(url);
    await fetch(url, config);
  };

  const test = () => {
    console.log(titleFieldValue, topicFieldValue, subtopicFieldValue, bodyValue);
  };

  const handleChange = (fieldNum, newValue) => {
    if (fieldNum == 1) setTitleFieldValue(newValue);
    else if (fieldNum == 2) setTopicFieldValue(newValue);
    else if (fieldNum == 3) setSubtopicFieldValue(newValue);
  } 

  const handleBodyChange = (e, newValue) => {
    alert("CHANGED");
    console.log(e, newValue);
    setBodyValue(newValue);
  }

  return (
    <div className={styles.doubtbox}>
      <b className={styles.headline}>Asking a new doubt to room ..</b>
      <FilterField label="Title" placeholder="Enter a title .. " 
        handleChange={(newValue) => handleChange(1, newValue)}/>
      <FilterField label="Topic" placeholder="Enter a topic .. "
        handleChange={(newValue) => handleChange(2, newValue)}/>
      <FilterField label="Subtopic" placeholder="Enter a subtopic .. "
        handleChange={(newValue) => handleChange(3, newValue)}/>
      <TextField
        sx={{ width: 781 }}
        color="primary"
        variant="outlined"
        multiline
        maxRows={5}
        label="Filter"
        placeholder="Textarea placeholder"
        helperText="Helper Text"
        margin="none"
        onChange={handleBodyChange}
      />
      <div className={styles.buttonbar}>
        <Button buttonText="Upload Image"/>
        <UploadWidget />
        <Button buttonText="Post" onClick={postDoubt}/>
      </div>
    </div>
  );
};

export default DoubtBox;
