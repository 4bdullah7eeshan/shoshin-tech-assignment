import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuSection.module.css";

const MenuSection = ({ title, items }) => {

    return (
        <section className={styles.menuSection}>
            <p className={styles.menuTitle}>{title}</p>
            <ul>
                {items.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        icon={item.icon} 
                        text={item.text} 
                        isSelected={item.text === "Dashboard"}
                    />
                ))}
            </ul>
        </section>
    );
};

export default MenuSection;
