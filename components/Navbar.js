import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from 'next/router';
import s from '../styles/Navbar.module.css';
import Image from 'next/image';
import Login from '../components/Login';
import DrawerComp from '../components/DrawerComp'
import Link from "next/link";
import {Box} from '@mui/system';
import { AppBar, Button, Toolbar, Typography, Grid, Tabs, useTheme, useMediaQuery, Tab } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";



const pages = [
    { name: 'Домой', src: '/' },
    { name: 'Обо мне', src: '/about' },
    { name: 'Галлерея', src: '/galleries' },
    { name: 'Отзывы', src: '/posts' },
    { name: 'Контакты', src: '/contact' },
    { name: 'Тест', src: '/test' },
];

export default function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const { pathname } = useRouter(); //путь текущей страницы
   const theme = useTheme();
   console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(isMatch)

    return (
        <AppBar position="static">
            <Toolbar>
           {isMatch ? (
           <>
           <Button
                    color="inherit"
                    onClick={openCart}
                >
                    <ShoppingCart />
                    {cartQuantity}
                </Button>
           <DrawerComp />
           </> 
           ) : (

           <Grid  sx={{placeItems: "center"}} container>
            <Grid item xs={2}>
            <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                <Image src="/logos1.jpg" width="60" height="60" alt="cake" />
                    IrisBacker
                </Typography>
               
              </Grid>

             <Grid item xs={5}>
                <Tabs>
              <div className={s.navbar}>
                   {pages.map(({ name, src }) =>
                        <div key={name} 
                            className={pathname === src
                                ? 'active'
                                : ''}>
                            <Link href={src} className="link">{name}</Link>
                        </div>
                       )}
                   </div>
              </Tabs>
              </Grid>
               <Grid  item xs={2} />
                <Grid item xs={3}>
                    <Button
                    color="inherit"
                    onClick={openCart}
                >
                    <ShoppingCart />
                    {cartQuantity}
                </Button>
                <Box display="flex"><Login /></Box>
                </Grid>
                </Grid>       
                )}
            </Toolbar>
        </AppBar>
       
    );
}





  