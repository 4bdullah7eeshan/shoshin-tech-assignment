import PropTypes from "prop-types";
import styles from "./MenuItem.module.css";

function MenuItem({ icon, text, isSelected }) {
  // Did not work!
  const selectedStyle = isSelected
    ? {
        color: "#FF5151",
        fontWeight: "500",
      }
    : {};

  return (
    <li className={styles.menuItemContainer}>
      <a
        href="#"
        className={`${styles.menuItem} ${isSelected ? styles.selected : ""}`}
        style={selectedStyle}
      >
        <img
          src={icon}
          alt={`${text} icon`}
        />
        <span className={styles.menuItemText}>{text}</span>
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default MenuItem;
