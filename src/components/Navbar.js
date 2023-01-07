import Button from "../components/Button";
import styles from "./Navbar.module.css";

const Navbar = ( {currentRoomName} ) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.signature}>
        <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        <div className={styles.companyname}>Querious</div>
      </div>
      <div className={styles.currentroom}>{currentRoomName}</div>
      <div className={styles.navbarbuttons}>
        <Button buttonText="Online Users" />
        <Button buttonText="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
