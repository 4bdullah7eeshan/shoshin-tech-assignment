import styles from "./MenuItem.module.css";

function MenuItem({ icon, text, isSelected }) {
    
    // Did not work!
    const selectedStyle = isSelected ? {
        color: '#FF5151',
        fontWeight: '500',
    } : {};

    return (

        <li className={styles.menuItemContainer}>
            <a
                href="#"
                className={`${styles.menuItem} ${isSelected ? styles.selected : ''}`}
                style={selectedStyle}
            >
                <img src={icon} alt={`${text} icon`} />
                <span className={styles.menuItemText}>{text}</span>
            </a>
        </li>

    )
}

export default MenuItem;