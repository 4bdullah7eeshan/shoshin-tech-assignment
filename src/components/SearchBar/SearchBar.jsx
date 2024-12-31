import searchIcon from "../../../public/assets/search-icon.svg"
import styles from "./SearchBar.module.css";

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="" />
        </div>
    )
}

export default SearchBar;