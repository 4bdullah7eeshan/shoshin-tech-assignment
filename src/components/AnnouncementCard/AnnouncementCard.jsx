import dropdownArrow from "../../../public/assets/dropdown-arrow.svg";
import announcements from "../../utils/data/announcements";
import styles from "./AnnouncementCard.module.css";
import pinIcon from "../../../public/assets/pin.svg";
import threeDotsIcon from "../../../public/assets/three-dots.svg";

function AnnouncementCard() {
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <article className={styles.announcementCard}>
      <header>
        <h3>Announcement</h3>
        <button>
          <p>Today, 13 Sep 2021</p>
          <img
            src={dropdownArrow}
            alt=""
          />
        </button>
      </header>
      <ul className={styles.announcementsList}>
        {recentAnnouncements.map((announcement, index) => (
          <li key={index}>
            <div className={styles.announcementText}>
              <h4>{announcement.title}</h4>
              <p>{announcement.time}</p>
            </div>
            <div className={styles.announcementManageIcons}>
              <img
                src={pinIcon}
                alt=""
              />
              <img
                src={threeDotsIcon}
                alt=""
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default AnnouncementCard;
