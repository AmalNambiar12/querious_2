import Button from "../components/Button";
import styles from "./DoubtCard.module.css";


const DoubtCard = ({
  star,
  roomID,
  doubtID,
  doubtTitle,
  doubtBody,
  doubtSenderName,
  doubtTimeStamp,
  doubtDetail,
  buttonBarVisible
  }) => {
  
  const backend = "querious2.amalanilkumar2.repl.co";//"http://localhost:5000";
  
  const starDoubt = () => {
    // fix starring

  };

  return (
    <div className={styles.doubtcard}>
      <div className={styles.doubtheader}>
        <span className={styles.sendername}>{doubtSenderName}</span>
        <span className={styles.timestamp}>{doubtTimeStamp}</span>
      </div>
      <b className={styles.doubttitle}>
        {doubtTitle}
      </b>
      <p className={styles.doubtbody}>
        <span className={styles.thisIsSome}>
          {doubtBody}
        </span>
      </p>
      <div className={styles.bottombar}>
        <div className={(buttonBarVisible ? styles.doubtbuttonbar : 
           styles.doubtbuttonbar+" "+styles.buttonbarinvisible)}>
          <button className={styles.starbutton}>
            <img className={styles.starIcon} alt="" src={star} />
          </button>
          <Button
            buttonText={`Solutions >`}
            logoutButtonPadding="5px 8px"
            buttonTextFontSize="16px"
            logoutButtonBorderRadius="10px"
          />
        </div>
        <div className={styles.sendername}>{doubtDetail}</div>
      </div>
    </div>
  );
};

export default DoubtCard;
