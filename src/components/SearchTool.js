import styles from "./SearchTool.module.css";

const SearchTool = () => {
  return (
    <div className={styles.searchtool}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Search doubt .."
      />
      <button className={styles.searchbutton}>
        <img className={styles.searchIcon} alt="" src="../search.svg" />
      </button>
    </div>
  );
};

export default SearchTool;
