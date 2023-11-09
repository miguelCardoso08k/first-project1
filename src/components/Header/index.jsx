import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <span>John</span>
      </Link>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/search">Pesquisar</Link>
        <Link href="/contact">Contato</Link>
        <Link href="/about">Sobre</Link>
      </nav>
    </header>
  );
};

export default Header;
