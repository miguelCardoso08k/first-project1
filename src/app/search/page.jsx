import styles from "./page.module.css";

const Search = () => {
  return (
    <>
      <div className={styles.searchGroup}>
        <input
          className={styles.inputSearch}
          type="search"
          placeholder="Pesquise aqui"
        />
        <button type="submit">submit</button>
      </div>
    </>
  );
};

export default Search;
