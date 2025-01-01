import InfoCard from "../InfoCard/InfoCard";
import SummaryCard from "../SummaryCard/SummaryCard";
import AnnouncementCard from "../AnnouncementCard/AnnouncementCard";
import RecentActivityCard from "../RecentActivityCard/RecentActivityCard";
import UpcomingScheduleCard from "../UpcomingScheduleCard/UpcomingScheduleCard";
import infoCards from "../../utils/data/infoCards";
import summaryCards from "../../utils/data/summaryCards";
import styles from "./Dashboard.module.css";


function Dashboard() {
    return(
        <main className={styles.dashboard}>
            <header>
                <h1 className={styles.dashboardHeaderText}>Dashboard</h1>
            </header>
            <div className={styles.cardsContainer}>
                <div className={styles.two}>
                    <div className={styles.infoCardsContainer}>
                        {infoCards.map((data, index) => (
                            <InfoCard
                                key={index}
                                title={data.title}
                                info={data.info}
                                description={data.description}
                            />
                    ))}
                        
                    </div>

                    <div className={styles.summaryCardsContainer}>
                        {summaryCards.map((data, index) => (
                            <SummaryCard
                                key={index}
                                title={data.title}
                                menCount={data.menCount}
                                womenCount={data.womenCount}
                                isIncrease={data.isIncrease}
                                percentage={data.percentage}
                            />
                        ))}
                        
                    </div>

                    <AnnouncementCard />

                </div>
                <div className={styles.three}>
                    <RecentActivityCard />
                    <UpcomingScheduleCard />
                </div>
            </div>

        </main>
    );
}

export default Dashboard;