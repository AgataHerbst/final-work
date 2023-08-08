import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from 'next/router';
import s from '../styles/Navbar.module.css';
import Image from 'next/image';
import Login from '../components/Login';
import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext"

const pages = [
    { name: 'Домой', src: '/' },
    { name: 'Обо мне', src: '/about' },
    { name: 'Галлерея', src: '/galleries' },
    { name: 'Отзывы', src: '/posts' },
    { name: 'Контакты', src: '/contact' },
    { name: 'Тест', src: '/test' },
];

function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const { pathname } = useRouter(); //путь текущей страницы

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
                    {pages.map(({ name, src }) =>
                        <div key={name}
                            className={pathname === src
                                ? 'active'
                                : ''}>
                            <Link href={src} className="link">{name}</Link>
                        </div>
                    )}
                    <div><Login /></div>
                </div>
                <Button
                    color="inherit"
                    onClick={openCart}
                >
                    <ShoppingCart
                    />
                    {cartQuantity}
                </Button>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;