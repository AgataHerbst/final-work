//основной макет приложения
//import '../styles.css'

import Footer from './Footer.js';
import Header from './Navbar.js';

 function Layout({ children }) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}
export default Layout;
