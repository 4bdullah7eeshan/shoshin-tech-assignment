import styles from "./MenuItem.module.css";

function MenuItem({ icon, text }) {
    return (
        
        <li className={styles.menuItemContainer}>
            <a href="#" className={styles.menuItem}>
                <img src={icon}/>
                <span className={styles.menuItemText}>{text}</span>
            </a>
        </li>
        
    )
}

export default MenuItem;