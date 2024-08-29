/* Import */
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/FloatMenu.module.css";
/* Component */

const FloatMenu = () => {
  return (
    <div className={styles.floatmenu}>
      <div className={styles.floatmenu__wrap}>
        <ul className={styles.floatmenu__list}>
          <li className={styles.floatmenu__item_ad}>
            <Link to='/'>
              <img src='' alt='' />
            </Link>
          </li>
        </ul>
      </div>
      <button className={styles.floatmenu__latestbtn}></button>
      <button className={styles.floatmenu__topbtn}>
        <p>TOP</p>
      </button>
    </div>
  );
};

export default FloatMenu;
