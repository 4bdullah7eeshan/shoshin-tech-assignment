import dropdownArrow from "../../../public/assets/dropdown-arrow.svg";
import styles from "./UserProfile.module.css";

function UserProfile({ userAvatar, userName }) {
    return (
        <div className={styles.userProfile}>
            <img 
                className={styles.userAvatar} 
                src={userAvatar} 
                alt={`${userName}'s profile picture`} 
            />
            
            <span className={styles.userName}>
                {userName}
            </span>

            <button className={styles.dropdownArrow}>
                <img src={dropdownArrow} alt="Dropdown arrow" />
            </button>
        </div>
    );
}

export default UserProfile;
