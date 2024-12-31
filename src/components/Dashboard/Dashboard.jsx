import InfoCard from "../InfoCard/InfoCard";
import infoCards from "../../utils/data/infoCards";
import styles from "./Dashboard.module.css";


function Dashboard() {
    return(
        <main className={styles.dashboard}>
            <header>
                <h1 className={styles.dashboardHeaderText}>Dashboard</h1>
            </header>
            <div className={styles.cardsContainer}>
                <div>
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

                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        Total Employees
                                    </div>
                                    <div>
                                        216
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        120 Men
                                    </div>
                                    <div>
                                        96 Women
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* 4 things */}
                                </div>
                                <div>
                                    <div>
                                        +2% Past month
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>


                        </div>
                    </div>

                    <div>

                    </div>

                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>

                </div>
            </div>

        </main>
    );
}

export default Dashboard;