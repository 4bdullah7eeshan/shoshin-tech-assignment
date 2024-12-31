import messageIcon from "../../../public/assets/message-icon.svg";
import styles from "./MessageIcon.module.css";

function MessageIcon() {
    return (
        <button className={styles.messageIcon}>
            <img src={messageIcon} alt="" />
        </button>
    )
}

export default MessageIcon;