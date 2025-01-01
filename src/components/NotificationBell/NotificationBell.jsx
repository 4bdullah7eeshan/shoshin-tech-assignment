import notificationBellIcon from "../../../public/assets/notification-bell.svg";
import styles from "./NotificationBell.module.css";

function NotificationBell() {
  return (
    <button className={styles.notificationBell}>
      <img
        src={notificationBellIcon}
        alt=""
      />
    </button>
  );
}

export default NotificationBell;
