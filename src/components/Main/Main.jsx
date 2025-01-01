import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Dashboard />
    </main>
  );
}

export default Main;
