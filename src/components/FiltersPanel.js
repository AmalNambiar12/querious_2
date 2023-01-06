import FilterField from "../components/FilterField";
import Button from "../components/Button";
import styles from "./FiltersPanel.module.css";

const FiltersPanel = () => {
  return (
    <div className={styles.filterspanel}>
      <b className={styles.filterstext}>Filters</b>
      <FilterField
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
      />
      <FilterField
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
      />
      <FilterField
        titleFieldWidth="unset"
        titleFieldBoxSizing="unset"
        titleFieldAlignSelf="stretch"
      />
      <Button buttonText="Filter" />
    </div>
  );
};

export default FiltersPanel;
