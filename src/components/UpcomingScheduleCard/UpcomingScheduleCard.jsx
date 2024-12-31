import styles from "./UpcomingScheduleCard.module.css";
import threeDotsIcon from "../../../public/assets/three-dots.svg";
import dropdownArrow from "../../../public/assets/dropdown-arrow.svg";
import upcomingSchedule from "../../utils/data/upcomingSchedule";



function UpcomingScheduleCard() {
    
    const recentAnnouncements = upcomingSchedule.slice(0, 3);

    return (
        <article className={styles.announcementCard}>
            <header>
                <h3>Upcoming Schedule</h3>
                <button>
                    <p>Today, 13 Sep 2021</p>
                    <img src={dropdownArrow} alt="" />
                </button>
            </header>
            <p>Priority</p>
            <ul className={styles.announcementsList}>
                {recentAnnouncements.map((announcement, index) => (
                    <li key={index}>
                        <div className={styles.announcementText}>
                            <h4>{announcement.title}</h4>
                            <p>{announcement.time}</p>
                        </div>
                        <div className={styles.announcementManageIcons}>
                            <img src={threeDotsIcon} alt="" />
                        </div>

                    </li>
                ))}
            </ul>
        </article>
    );
}

export default UpcomingScheduleCard;