//основной макет приложения
//import '../styles.css'

import Footer from './Footer';
import Header from './Navbar';

 function Layout({ children }) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}
export default Layout;
