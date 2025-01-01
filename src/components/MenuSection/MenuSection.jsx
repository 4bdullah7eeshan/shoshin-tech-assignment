import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuSection.module.css";

const MenuSection = ({ title, items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section className={styles.menuSection}>
            <p className={styles.menuTitle}>{title}</p>
            <ul>
                {items.map((item, index) => (
                    <MenuItem key={index} icon={item.icon} text={item.text} isSelected={selectedItem === item.id} onClick={() => setSelectedItem(item.id)} />
                ))}
            </ul>
        </section>
    );
};

export default MenuSection;
