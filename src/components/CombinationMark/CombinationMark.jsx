import Logo from "../Logo/Logo";
import Wordmark from "../Wordmark/Wordmark";
import styles from "./CombinationMark.module.css";

function CombinationMark() {
  return (
    <div className={styles.combinationMark}>
      <Logo />
      <Wordmark />
    </div>
  );
}

export default CombinationMark;
