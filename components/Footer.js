import s from '../styles/Footer.module.css';
import SocialMediaIcons from '../components/SocialMediaIcons';


function Footer() {
   return <>
      <footer className={s.footer}>
         <div className={s.heading}>&copy; 2023 IrisBakery.com</div>
        <SocialMediaIcons />
      </footer>
      </>
}

export default Footer;