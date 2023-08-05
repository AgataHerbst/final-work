import { SessionProvider } from 'next-auth/react';
//import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Basket from '../components/Basket';
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';



const theme = createTheme({
    palette: {
        primary: {
            light: '#AFEEEE',
            main: '#8FBC8F',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#FF6347',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    });

function MyApp({ Component,
    pageProps: { session, ...pageProps }
}) {
  const [order, setOrder] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };
  
    return <>
    <ShoppingCartProvider>
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                <Navbar
                    handleCart={setCartOpen}
                    orderLen={10}
                />
                <Component {...pageProps} />
                <Container fixed >
                    <Footer />
                </Container>
                <Basket
                    order={order}
                    removeFromOrder={removeFromOrder}
                    cartOpen={isCartOpen}
                    closeCart={() => setCartOpen(false)}
                   
                />
                </ThemeProvider>
        </SessionProvider>
        </ShoppingCartProvider>
    </>
}
export default MyApp;





