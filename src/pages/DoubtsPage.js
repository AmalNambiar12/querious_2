import Navbar from "../components/Navbar";
import UserPanel from "../components/UserPanel";
import RoomsPanel from "../components/RoomsPanel";
import SearchTool from "../components/SearchTool";
import DoubtList from "../components/DoubtList";
import DoubtBox from "../components/DoubtBox";
import FiltersPanel from "../components/FiltersPanel";
import Button from "../components/Button";
import styles from "./DoubtsPage.module.css";
import { useState, useEffect } from "react";

const DoubtsPage = () => {
  const [postState, setPostState] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(1);
  const [rooms, setRooms] = useState([
    {
      roomID: 1,
      roomTitle: "Digital Design"
    },
    {
      roomID: 2,
      roomTitle: "OOP"
    }
  ]);

  const [doubts, setDoubts] = useState([
    // {
    //   doubtID: 25,
    //   doubtTitle: "TITLEEIJJEI",
    //   doubtBody: "BODYIHIDHO",
    //   doubtSenderName: "Amal",
    //   doubtTimeStamp: "Today",
    //   doubtDetail: "DETAIL DETAILS"
    // }
  ]);

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


  const loadDoubtsFromRoom = async (roomID) => {
    let config = getToken();
    let url = "http://localhost:5000/api/doubts/"+roomID;
    let x = await fetch(url, config).then(res => res.json());
    await setDoubts([]);
    for (let i=0; i<x.length; i++) {
      setDoubts(doubts => doubts.concat(x[i]));
    }
  };

  useEffect(() => {
    loadDoubtsFromRoom(1);
  }, []);

  useEffect(() => {
    loadDoubtsFromRoom(currentRoom);
  }, [currentRoom])


  return (
    <div className={styles.doubtspage}>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.doubtpagecontents}>
          <div className={styles.leftsidebar}>
            <UserPanel />
            <RoomsPanel rooms={rooms} navRoom={(x) => setCurrentRoom(x)}/>
          </div>
          {!postState ? <div className={styles.centrebar}>
            <SearchTool />
            <DoubtList doubts={doubts}/>
          </div> : <div className={styles.centrebar}>
            <DoubtBox />
          </div>}
          <div className={styles.rightsidebar}>
            <FiltersPanel />
            <Button
              buttonText={!postState ? "Ask Doubt" : "Back"}
              logoutButtonPadding="6px 20px"
              logoutButtonOverflow="unset"
              logoutButtonAlignItems="flex-start"
              logoutButtonJustifyContent="flex-start"
              buttonTextFontSize="24px"
              onClick={() => setPostState(!postState)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtsPage;
