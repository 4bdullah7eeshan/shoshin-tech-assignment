import dropdownArrow from "../../../public/assets/dropdown-arrow.svg";
import styles from "./AnnoucementCard.module.css";

function AnnoucementCard() {
    return (
        <article>
            <header>
                <h3>Announcement</h3>
                <button>
                    <p>Today, 13 Sep 2021</p>
                    <img src={dropdownArrow} alt="" />
                </button>
            </header>
            <ul>
                
            </ul>
        </article>
    );
}

export default AnnoucementCard;