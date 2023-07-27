import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Basket from '../components/Basket';
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#FFE4B5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#FF8C00',
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
    console.log(Component.auth)
    return <>
        <SessionProvider session={session}>
        <ThemeProvider theme={theme}> 
            <Navbar
                handleCart={setCartOpen}
                orderLen={10}
            />
             </ThemeProvider>
            <main>
                {Component.auth ? (
                    <Auth>
                        <Component {...pageProps} />
                    </Auth>
                ) : (
                    <Component {...pageProps} />
                )
                }
            </main>
            <Container fixed >
                <Footer />
            </Container>
            <Basket
                order={order}
                removeFromOrder={removeFromOrder}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
        </SessionProvider>

    </>
}
export default MyApp;

function Auth({ children }) {
    const router = useRouter()
    const { data: session, status } = useSession()
    const isUser = !!session?.user
    const loading = status === 'loading'

    useEffect(() => {
        if (!loading) {
            if (!isUser) {
                router.push('/api/auth/signin')
            }
        }
    }, [isUser, loading])

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (!loading && isUser) {

        return <>{children}</>
    }
    return null

}
