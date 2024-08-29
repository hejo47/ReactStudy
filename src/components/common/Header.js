/* CSS Module */
import styles from "../../css/module/Header.module.css";
/* Component */
import Container from "./Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        Header
      </Container>
    </header>
  );
}

export default Header;