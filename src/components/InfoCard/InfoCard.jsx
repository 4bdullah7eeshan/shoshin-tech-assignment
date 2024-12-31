import styles from "./InfoCard.module.css";

function InfoCard({ title, info, description }) {
    
    const getCardStyles = () => {
        switch (title) {
          case "Available Position":
            return { bgColor: "#FFEFE7", descColor: "#FF5151" };
          case "Job Open":
            return { bgColor: "#E8F0FB", descColor: "#3786F1" };
          case "New Employees":
            return { bgColor: "#FDEBF9", descColor: "#EE61CF" };
        }
    };

    return (
        <article className={styles.infoCard}>
            <p></p>
            <p></p>
            <p></p>
        </article>
    );
}

export default InfoCard;