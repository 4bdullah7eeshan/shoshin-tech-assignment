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

    const { bgColor, descColor } = getCardStyles();

    return (
        <article className={styles.infoCard} style={{ backgroundColor: bgColor }}>
            <p>{title}</p>
            <p>{info}</p>
            <p style={{ color: descColor }}>{description}</p>
        </article>
    );
}

export default InfoCard;