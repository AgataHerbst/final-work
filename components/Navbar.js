import { useRouter } from 'next/router';
//import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Galleries', path: '/galleries' },
    { id: 4, title: 'Posts', path: '/posts' },
    { id: 5, title: 'Contact', path: '/contact' },
];

function Navbar() {
    const { pathname } = useRouter(); //путь текущей страницы
    // const { data, status } = useSession();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo1.png" width="60" height="60" alt="cake" />
                IrisBacker
            </div>
            <div className={styles.links}>
                {navigation.map(({ id, title, path }) => (
                    <Link key={id} href={path}>
                        <legacyBehavior className={pathname === path ? styles.active : null}>{title}</legacyBehavior></Link>
                ))}

            </div>
        </nav>
    );
};

export default Navbar;