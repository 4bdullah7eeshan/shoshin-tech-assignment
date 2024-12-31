import upArrow from "../../../public/assets/up-arrow.svg";
import graph from "../../../public/assets/graph.svg";
import graphGradient from "../../../public/assets/graph-gradient.svg";

import styles from "./SummaryCard.module.css";

function SummaryCard({ title, menCount, womenCount, isIncrease, percentage }) {
    return(
        <article className={styles.summaryCard}>
            <section className={styles.textContainer}>
                <header>
                    <h4>{title}</h4>
                    <p>{parseInt(menCount, 10) + parseInt(womenCount, 10)}</p>
                </header>

                <footer>
                    <p><small>{`${menCount} Men`}</small></p>
                    <p><small>{`${womenCount} Women`}</small></p>
                </footer>
            </section>
            <section className={styles.graphContainer}>
                <div>
                    <small>
                        {isIncrease ? '+' : '-'}{percentage}%
                    </small>
                    <img src={upArrow} alt="" />
                    <img src={graph} alt="" />
                </div>

                <p>
                    <small>{isIncrease ? '+' : '-'}{percentage}% Past month</small>
                </p>
            </section>
        </article>
    )
}

export default SummaryCard;