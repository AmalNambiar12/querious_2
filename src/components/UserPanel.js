import Button from "../components/Button";
import styles from "./UserPanel.module.css";

const UserPanel = () => {
  return (
    <div className={styles.userpanel}>
      <b className={styles.username}>UsernameHElooMyna</b>
      <div className={styles.unreadsolutionslabel}>Unread solutions: 0</div>
      <Button buttonText="View Profile" />
    </div>
  );
};

export default UserPanel;
