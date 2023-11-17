import Link from "next/link";
import styles from "./Header.module.css";
import SearchButton from "@/components/Button/SearchButton";
import MenuButton from "@/components/Button/MenuButton";
const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <Link href="/">Lançamentos</Link>
        <Link href="/">Categorias</Link>
        <Link href="/">
          <span>Films</span>
        </Link>
        <Link href="/">Populares</Link>
        <Link href="/">Blog</Link>
        <Link href="/search">
          <SearchButton />
        </Link>
        <MenuButton />
      </nav>
    </header>
  );
};

export default Header;
