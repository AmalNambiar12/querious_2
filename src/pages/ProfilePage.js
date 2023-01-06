import Navbar from "../components/Navbar";
import UserPanel from "../components/UserPanel";
import RoomsPanel from "../components/RoomsPanel";
import DoubtCard from "../components/DoubtCard";
import styles from "./ProfilePage.module.css";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [side, setSide] = useState(true);
  const [yourDoubts, setYourDoubts] = useState([]);
  const [starredDoubts, setStarredDoubts] = useState([]);

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

  const handleSide = (x) => {
    if (side != x) {
      setSide(x);
    }
  };

  useEffect(async () => {
    let config = getToken();
    let u = JSON.parse(localStorage.getItem("userInfo")).username;
    let url = "http://localhost:5000/api/yourdoubts/"+u;
    let x = await fetch(url, config).then(res => res.json());
    await setYourDoubts([]);
    for (let i=0; i<x.length; i++) {
      setYourDoubts(yourDoubts => yourDoubts.concat(x[i]));
    }

    url = "http://localhost:5000/api/starreddoubts/"+u;
    x = await fetch(url, config).then(res => res.json());
    await setStarredDoubts([]);
    for (let i=0; i<x.length; i++) {
      setStarredDoubts(starredDoubts => starredDoubts.concat(x[i]));
    }
  });

  return (
    <div className={styles.profilepage}>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.profilepagecontents}>
          <div className={styles.leftsidebar}>
            <UserPanel />
            <RoomsPanel rooms={[]} navRoom={(x) => navRoom(x)}/>
          </div>
          <div className={styles.rightsidebar}>
            <div className={styles.profilebuttonbar}>
              <button className={(side ? styles.yourdoubtsbutton : styles.starreddoubtsbutton) + " " + styles.leftbutton}
                onClick={() => handleSide(true)}>
                <div className={styles.buttontext}>{`Your Doubts `}</div>
              </button>
              <button className={(!side ? styles.yourdoubtsbutton : styles.starreddoubtsbutton) + " " + styles.rightbutton}
                onClick={() => handleSide(false)}>
                <div className={styles.buttontext1}>{`Starred Doubts `}</div>
              </button>
            </div>
            <div className={styles.profiledoubtlist}>
              {/* <DoubtCard star="../star1.svg" /> */}
              <DoubtList doubts={side ? yourDoubts : starredDoubts}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
