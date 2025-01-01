import styles from "./MenuItem.module.css";

function MenuItem({ icon, text, isSelected, onClick }) {
    if (text === "Dashboard") {
        isSelected = true;
    }
    return (
        
        <li className={styles.menuItemContainer}>
            <a 
                href="#" 
                className={`${styles.menuItem} ${isSelected ? styles.selected : ''}`}
                onClick={onClick}
            >
                <img src={icon} alt={`${text} icon`} />
                <span className={styles.menuItemText}>{text}</span>
            </a>
        </li>
        
    )
}

export default MenuItem;