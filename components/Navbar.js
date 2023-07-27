import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import s from '../styles/Navbar.module.css';
import Login from '../components/Login';
import Image from 'next/image';
import Link from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";

const pages = [
    { name: 'Home', src: '/' },
    { name: 'About', src: '/about' },
    { name: 'Galleries', src: '/galleries' },
    { name: 'Posts', src: '/posts' },
    { name: 'Contact', src: '/contact' },
    { name: 'Admin', src: '/admin', restricted(session) { return 'admin' === session?.user?.role; } }
];

function Navbar({ handleCart, orderLen }) {

    const router = useRouter(); //путь текущей страницы
    const { data: session } = useSession();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    <Image src="/logos1.jpg" width="60" height="60" alt="cake" />
                    IrisBacker
                </Typography>

                <div className={s.navbar}>
                    {pages.filter(page => page?.restricted
                        ? page.restricted(session)
                        : true)
                        .map(({ name, src }) =>
                            <div key={name}
                                className={router.pathname === src
                                    ? 'active'
                                    : ''}>
                                <Link href={src} className="link">{name}</Link>
                            </div>
                        )}
                    <div><Login /></div>
                </div>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color='secondary'
                        badgeContent={orderLen}
                    >
                        <ShoppingCart
                        />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;