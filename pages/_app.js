import { SessionProvider } from 'next-auth/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container } from "react-bootstrap";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@/styles/global.css';
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


const linksArray = [
    { name: 'Домой', src: '/' },
    { name: 'Обо мне', src: '/about' },
    { name: 'Галлерея', src: '/galleries' },
    { name: 'Отзывы', src: '/posts' },
    { name: 'Контакты', src: '/contact' },
    { name: 'Тест', src: '/test' },
]

function MyApp({ Component,
    pageProps: { session, ...pageProps }
}) {

    return <>
        <ShoppingCartProvider>
            <SessionProvider session={session}>
                <ThemeProvider theme={theme}>
                    <Navbar links={linksArray} />
                <Component {...pageProps} />
                 <Container>
                        <Footer />
                    </Container>
                </ThemeProvider>
            </SessionProvider>
        </ShoppingCartProvider>
    </>
}
export default MyApp;





