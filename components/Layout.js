import Footer from './Footer';
import Navbar from './Navbar';
import Provider from './components/Provider'

 function Layout({ children }) {
    return <>
     <Provider>
        <Navbar />
        {children}
        <Footer />
        </Provider>
    </>
}
export default Layout;
