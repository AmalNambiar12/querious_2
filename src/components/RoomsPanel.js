import styles from "./RoomsPanel.module.css";

const RoomsPanel = ( {rooms, navRoom} ) => {
  return (
    <div className={styles.roomspanel}>
      <b className={styles.roomstext}>Rooms</b>
      <div className={styles.roomslist}>
        {rooms.map((room) => (
          <div className={styles.roomlink} key={room.roomID} onClick={() => navRoom(room.roomID)}>
            {room.roomTitle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPanel;
