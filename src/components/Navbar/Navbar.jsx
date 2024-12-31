import SearchBar from "../SearchBar/SearchBar";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navItemsContainer">
                <SearchBar />
                <UserProfileMenu />
            </div>
        </nav>
    )
}

export default Navbar;