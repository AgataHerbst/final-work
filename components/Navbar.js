import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

function Navbar ()  {
return (
  <nav className={styles.nav}>
        <div className={styles.logo}>
            IrisBacker
            </div>
        <div className={styles.links}>
               <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/galleries">Galleries</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/posts">Posts</Link>
            </div>
            </nav>
);
};

export default Navbar;