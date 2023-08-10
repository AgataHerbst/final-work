import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMediaIcons = () => {
  return (
    <div>
     <Link
        className="hover:opacity-50 transition duration-500"
        href="https://t.me/+HXDREgaKVyk2MzQy"
        target="_blank"
        rel="noreferrer"
      >
       <TelegramIcon sx={{ fontSize: 40 }}/>
      </Link>
      <Link
        className="hover:opacity-50 transition duration-500"
        href="https://chat.whatsapp.com/LwsrjwGOS7aLcqeOEHpJyj"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon sx={{ fontSize: 40 }} />
      </Link>
      <Link
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/bakery_irsh?igshid=NjIwNzIyMDk2Mg=="
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon sx={{ fontSize: 40 }} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;