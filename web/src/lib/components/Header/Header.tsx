import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Hei! 👋</h1>
      <p>Jeg heter Adrian, og jeg liker å lage musikk.</p>
    </header>
  );
};

export default Header;
