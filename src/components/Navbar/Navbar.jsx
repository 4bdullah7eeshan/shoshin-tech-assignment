import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navItemsContainer">
                <SearchBar />
            </div>
        </nav>
    )
}

export default Navbar;