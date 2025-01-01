import NotificationBell from "../NotificationBell/NotificationBell";
import MessageIcon from "../MessageIcon/MessageIcon";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./UserProfileMenu.module.css";
import user from "../../utils/data/user";

function UserProfileMenu() {
  return (
    <header className={styles.userProfileMenu}>
      <NotificationBell />
      <MessageIcon />
      <UserProfile
        userAvatar={user.avatar}
        userName={user.name}
      />
    </header>
  );
}

export default UserProfileMenu;
