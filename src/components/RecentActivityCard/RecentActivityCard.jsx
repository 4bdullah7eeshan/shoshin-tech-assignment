import styles from "./RecentActivityCard.module.css";

function RecentActivityCard() {
  return (
    <article className={styles.recentActivityCard}>
      <header>
        <h3>Recently Activity</h3>
      </header>
      <section>
        <p className={styles.recentActivityDate}>
          <small>10.40 AM, Fri 10 Sept 2021</small>
        </p>
        <p className={styles.recentActivityTitle}>You Posted a New Job</p>
        <p className={styles.recentActivityDetail}>
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </section>
      <footer>
        <p>Today you makes 12 Activity</p>
        <button>See All Activity</button>
      </footer>
    </article>
  );
}

export default RecentActivityCard;
