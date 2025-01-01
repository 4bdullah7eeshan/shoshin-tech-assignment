import styles from "./UpcomingScheduleCard.module.css";
import threeDotsIcon from "../../../public/assets/three-dots.svg";
import dropdownArrow from "../../../public/assets/dropdown-arrow.svg";
import upcomingSchedule from "../../utils/data/upcomingSchedule";



function UpcomingScheduleCard() {
    
    const priorityAnnouncements = upcomingSchedule.filter(announcement => announcement.tag === "Priority");
    const otherAnnouncements = upcomingSchedule.filter(announcement => announcement.tag === "Other");

    return (
        <article className={styles.announcementCard}>
            <header>
                <h3>Upcoming Schedule</h3>
                <button>
                    <p>Today, 13 Sep 2021</p>
                    <img src={dropdownArrow} alt="" />
                </button>
            </header>
            <p className={styles.tag}>Priority</p>
            <ul className={styles.announcementsList}>
                {priorityAnnouncements.map((announcement, index) => (
                    <li key={index} className={styles.announcementItem}>
                        <div className={styles.announcementText}>
                            <h4>{announcement.title}</h4>
                            <p>{announcement.time}</p>
                        </div>
                        <div className={styles.announcementManageIcons}>
                            <img src={threeDotsIcon} alt="Manage" />
                        </div>
                    </li>
                ))}
            </ul>

            {/* Render Other Announcements */}
            <p className={styles.tag}>Other</p>
            <ul className={styles.announcementsList}>
                {otherAnnouncements.map((announcement, index) => (
                    <li key={index} className={styles.announcementItem}>
                        <div className={styles.announcementText}>
                            <h4>{announcement.title}</h4>
                            <p>{announcement.time}</p>
                        </div>
                        <div className={styles.announcementManageIcons}>
                            <img src={threeDotsIcon} alt="Manage" />
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default UpcomingScheduleCard;