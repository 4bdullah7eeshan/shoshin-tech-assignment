import CombinationMark from "../CombinationMark/CombinationMark";
import Menus from "../Menus/Menus";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <CombinationMark />
      <Menus />
    </aside>
  );
}

export default Sidebar;
