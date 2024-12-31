import SearchBar from "../SearchBar/SearchBar";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItemsContainer}>
                <SearchBar />
                <UserProfileMenu />
            </div>
        </nav>
    )
}

export default Navbar;