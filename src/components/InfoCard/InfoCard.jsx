import PropTypes from 'prop-types';
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
          default:
            return { bgColor: "#FFFFFF", descColor: "#000000" };
        }
    };

    const { bgColor, descColor } = getCardStyles();

    return (
        <article className={styles.infoCard} style={{ backgroundColor: bgColor }}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.info}>{info}</p>
            <p style={{ color: descColor }} className={styles.description}><small>{description}</small></p>
        </article>
    );
}

InfoCard.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    description: PropTypes.string,
};

export default InfoCard;