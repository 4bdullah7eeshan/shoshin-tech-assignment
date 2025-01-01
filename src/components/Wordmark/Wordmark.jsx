import wordmark from "../../../public/assets/wordmark.svg";
import styles from "./Wordmark.module.css";

function Wordmark() {
    return(
        <>
            <img src={wordmark} className={styles.wordmark}/>        
        </>
    )
}

export default Wordmark;