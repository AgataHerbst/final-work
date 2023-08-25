import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMediaIcons = () => {
  return (
    <div>
      <Link
        href="https://t.me/+HXDREgaKVyk2MzQy"
      >
        <TelegramIcon sx={{ fontSize: 50 }} />
      </Link>
      <Link
        href="https://chat.whatsapp.com/LwsrjwGOS7aLcqeOEHpJyj"
      >
        <WhatsAppIcon sx={{ fontSize: 50 }} />
      </Link>
      <Link
        href="https://instagram.com/bakery_irsh?igshid=NjIwNzIyMDk2Mg=="
      >
        <InstagramIcon sx={{ fontSize: 50 }} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;