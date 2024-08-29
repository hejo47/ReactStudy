/* CSS Module */
import styles from "../../css/module/Badge.module.css";
/* Component */

const Badge = (props) => {
  return (
    <div className={styles.badge}>
      <p>{props.count}</p>
    </div>
  );
};

export default Badge;
