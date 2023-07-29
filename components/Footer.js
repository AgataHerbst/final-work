//import '../styles.css'
import s from '../styles/Footer.module.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";


function Footer() {
   return <>
      <footer className={s.footer}>
      <div className={s.heading}>&copy; 2023 IrisBackery.com</div>
      </footer>
      <div className={s.social}>
      <InstagramIcon sx={{ fontSize: 30 }}/>
      <GoogleIcon sx={{ fontSize: 30 }}/>
      </div>
   </>
}

export default Footer;