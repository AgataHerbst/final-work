//import '../styles.css'
import s from '../styles/Footer.module.css';
import SocialMediaIcons from '../components/SocialMediaIcons';


function Footer() {
   return <>
      <footer className={s.footer}>
      <div className={s.heading}>&copy; 2023 IrisBackery.com</div>
      <SocialMediaIcons />
      </footer>
      <div className={s.social}>
        
   </div>
   </>
}

export default Footer;