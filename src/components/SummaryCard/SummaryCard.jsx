import upArrow from "../../../public/assets/up-arrow.svg";
import graph from "../../../public/assets/graph.svg";
import graphGradient from "../../../public/assets/graph-gradient.svg";

import styles from "./SummaryCard.module.css";

function SummaryCard({ title, menCount, womenCount, isIncrease, percentage }) {
    return(
        <article>
            <section>
                <header>
                    <h4>{title}</h4>
                    <p>{menCount + womenCount}</p>
                </header>

                <footer>
                    <p><small>{`${menCount} Men`}</small></p>
                    <p><small>{`${womenCount} Women`}</small></p>
                </footer>
            </section>
            <section>
                <div>
                    <small>
                        {isIncrease ? '+' : '-'}{percentage}%
                    </small>
                    <img src={upArrow} alt="" />
                    <img src={graph} alt="" />
                    <img src={graphGradient} alt="" />
                </div>

                <p>
                    <small>{isIncrease ? '+' : '-'}{percentage}% Past month</small>
                </p>
            </section>
        </article>
    )
}

export default SummaryCard;