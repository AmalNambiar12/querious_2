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
  const backend = "querious2.amalanilkumar2.repl.co";//"http://localhost:5000";
  const [postState, setPostState] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(1);
  const [currentRoomName, setCurrentRoomName] = useState("Current Room HA!");
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
    let u = JSON.parse(localStorage.getItem("userInfo")).username;
    let url = "http://localhost:5000/api/doubts/"+roomID+"/unstarreddoubts/"+u;
    let x = await fetch(url, config).then(res => res.json());
    console.log(url);
    await setDoubts([]);
    for (let i=0; i<x.length; i++) {
      //x[i].isStarred = true
      setDoubts(doubts => doubts.concat(x[i]));
    }
  };

  const loadFilteredDoubts = async (x, y, z) => {
    // let config = getToken();
    // config.body = JSON.stringify({
    //   username: x,
    //   topic: y,
    //   subtopic: z
    // });
    // let url = backend+"/api/doubts/"+currentRoom.toString()+"/filter";
    // console.log(url);
    // let a = await fetch(url, config).then(res => res.json());
    // await setDoubts([]);
    // for (let i=0; i<a.length; i++) {
    //   //x[i].isStarred = true
    //   setDoubts(doubts => doubts.concat(a[i]));
    // }
    let config = getToken();
    let url;
    if (x != null) url = backend+"/api/doubts/"+currentRoom.toString()+"/filter3/"+x;
    else if (y != null) url = backend+"/api/doubts/"+currentRoom.toString()+"/filter1/"+y;
    else if (z != null) url = backend+"/api/doubts/"+currentRoom.toString()+"/filter2/"+z;
    let a = await fetch(url, config).then(res => res.json());
    await setDoubts([]);
    for (let i=0; i<a.length; i++) {
      //x[i].isStarred = true
      setDoubts(doubts => doubts.concat(a[i]));
    }
  };

  const applyFilter = (x, y, z) => {
    loadFilteredDoubts(x, y, z);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("room")) {
      const x = parseInt(urlParams.get("room"));
      //loadDoubtsFromRoom(x);
      setCurrentRoom(x);
      let obj = rooms.find(o => o.roomID === x).roomTitle;
      setCurrentRoomName(obj);
      console.log(x);
    }
    else {
      loadDoubtsFromRoom(1);
      let obj = rooms.find(o => o.roomID === 1).roomTitle;
      setCurrentRoomName(obj);
    }
  }, []);

  useEffect(() => {
    loadDoubtsFromRoom(currentRoom);
    let obj = rooms.find(o => o.roomID === currentRoom).roomTitle;
    setCurrentRoomName(obj);
  }, [currentRoom])



  return (
    <div className={styles.doubtspage}>
      <div className={styles.content}>
        <Navbar currentRoomName={currentRoomName}/>
        <div className={styles.doubtpagecontents}>
          <div className={styles.leftsidebar}>
            <UserPanel />
            <RoomsPanel rooms={rooms} navRoom={(x) => setCurrentRoom(x)}/>
          </div>
          {!postState ? <div className={styles.centrebar}>
            <SearchTool />
            <DoubtList roomID={currentRoom} doubts={doubts} buttonBarVisible={true}/>
          </div> : <div className={styles.centrebar}>
            <DoubtBox />
          </div>}
          <div className={styles.rightsidebar}>
            <FiltersPanel applyFilter={(x, y, z) => applyFilter(x, y, z)}/>
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
