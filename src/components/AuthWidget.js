import Button from "../components/Button";
import styles from "./AuthWidget.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AuthWidget = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async () => {
    const backend = "http://localhost:5000";
    const u = document.querySelector("#userInput").value;
    const p = document.querySelector("#passwordInput").value;

    if (isSignUp){
      try {
        const config = { 
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({username: u, password: p})
        };

        let x = await fetch(backend+'/api/users/', config);
        x = await x.json();

        console.log(x);
        localStorage.setItem('userInfo', JSON.stringify(x));
        console.log('request sent');
        nav("/");
      } catch(err) {
        //use toast later 
        console.log(err);
      }
    } else {
      try {
        const config = { 
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({username: u, password: p})
        };
        
        let x = await fetch(backend+'/api/users/login', config);
        x = await x.json();
        console.log(x)
        localStorage.setItem('userInfo', JSON.stringify(x));
        console.log('request sent');
        nav("/");
      } catch(error) {
        //use toast later 
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.authwidget}>
      <img
        className={styles.companylogoIcon}
        alt=""
        src="../companylogo@2x.png"
      />
      <b className={styles.signUp}>{isSignUp ? "Sign Up" : "Login"}</b>
      <div className={styles.usernamebox}>
        <span className={styles.username}>Username:</span>
        <input className={styles.usernamefield} id="userInput" type="text" />
      </div>
      <div className={styles.usernamebox}>
        <span className={styles.username}>Password:</span>
        <input className={styles.usernamefield} id="passwordInput" type="password" />
      </div>
      <Button buttonText={isSignUp ? 'Sign Up' : 'Login'} onClick={handleSubmit}/>
      <button className={styles.signupbutton}>
        <div className={styles.signuptext}>Sign up</div>
      </button>
      <span className={styles.redirect} onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Already a member? Login here' : 'New user? Sign up here'}</span>
    </div>
  );
};

export default AuthWidget;
