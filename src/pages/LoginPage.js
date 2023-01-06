import AuthWidget from "../components/AuthWidget";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginpage}>
      <div className={styles.content}>
        <div className={styles.leftsidebar}>
          <div className={styles.apptitle}>Querious</div>
          <div className={styles.apptitle}>Querious is an app for doubts.</div>
        </div>
        <div className={styles.rightsidebar}>
          <AuthWidget />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
