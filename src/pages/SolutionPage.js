import Navbar from "../components/Navbar";
import UserPanel from "../components/UserPanel";
import RoomsPanel from "../components/RoomsPanel";
import DoubtCard from "../components/DoubtCard";
import SolutionBox from "../components/SolutionBox";
import styles from "./SolutionPage.module.css";

const SolutionPage = () => {
  return (
    <div className={styles.solutionpage}>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.solutionpagebody}>
          <div className={styles.leftsidebar}>
            <div className={styles.profile}>
              <div className={styles.userName}>User Name</div>
              <div className={styles.unreadSolutions0}>
                Unread solutions: (0)
              </div>
              <button className={styles.profileButton}>
                <div className={styles.profile1}>Profile</div>
              </button>
            </div>
            <UserPanel />
            <div className={styles.roomslist}>
              <div className={styles.rooms}>Rooms</div>
            </div>
            <RoomsPanel />
          </div>
          <div className={styles.rightsidebar}>
            <div className={styles.doubtlist}>
              <DoubtCard star="../star2.svg" />
            </div>
            <SolutionBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
