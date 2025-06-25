import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.box}>
      <label className={styles.label} htmlFor="search">
        Search Person
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        placeholder="Search with names"
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
