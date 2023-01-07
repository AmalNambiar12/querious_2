import DoubtCard from "../components/DoubtCard";
import styles from "./DoubtList.module.css";
import { useState } from "react";

const DoubtList = ({ roomID, doubts, buttonBarVisible }) => {  
  return (
    <div className={styles.doubtlist}>
      {/* <DoubtCard 
        star="../star.svg" 
        doubtID={1}
        doubtTitle=""
        doubtBody=""
        doubtSenderName=""
        doubtTimeStamp=""
        doubtDetail=""
        /> */}
        {doubts.map((doubt) => (
          <DoubtCard 
          star="../star.svg" 
          key={doubt.doubtID}
          roomID={roomID}
          doubtID={doubt.doubtID}
          doubtTitle={doubt.title}//doubtTitle}
          doubtBody={doubt.body}
          doubtSenderName={doubt.userID}
          doubtTimeStamp={"000"}
          doubtDetail={doubt.topic+"/"+doubt.subtopic}
          buttonBarVisible={buttonBarVisible}
        />))}
    </div>
  );
};

export default DoubtList;
