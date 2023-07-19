import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from 'next/router';
//import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Galleries', path: '/galleries' },
    { id: 4, title: 'Posts', path: '/posts' },
    { id: 5, title: 'Contact', path: '/contact' },
];

function Navbar({ handleCart, orderLen }) {

    const { pathname } = useRouter(); //путь текущей страницы
    // const { data, status } = useSession();
    return (
        //<nav className={styles.nav}>
        // <div className={styles.logo}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    <Image src="/logo1.png" width="60" height="60" alt="cake" />
                    IrisBacker
                </Typography>
                <div>
                    {navigation.map(({ id, title, path }) => (
                        <Link key={id}
                         href={path}
                         className={pathname === path ? 'active' : ''}>
                         {title}</Link>
                    ))}
                    <Link href='api/auth/signin'><button>Войти</button></Link>
                </div>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color='secondary'
                        badgeContent={orderLen}
                    >
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;