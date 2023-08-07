import Heading from '../components/Heading';
import s from '../styles/Contact.module.css';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';
//import { Prisma } from '@prisma/client';
import { useRouter } from 'next/router';


function Contact() {
  const router = useRouter()
  return <>
    <Container fixed>
   <Heading text="Контакты:" />

    <div className={s.contact}>
      <Grid item xs={12} md={4}>
      <Image src="/contact/color.jpg" width={300} height={700} alt="chef" /></Grid>
     
        
        <div className={s.rightSide}>
          <form className={s.form}>
            <label className={s.label} htmlFor="name"> Полное имя </label>
            <input className={s.input} name="name" placeholder="Введите полное имя..." type="text" />
            <label className={s.label} htmlFor="email"> Email </label>
            <input className={s.input} name="email" placeholder="Введите email..." type="email" />
            <label className={s.label} htmlFor="message"> Сообщение </label>
            <textarea className={s.textarea}
              rows="6"
              placeholder="Введите ваш вопрос..."
              name="message"
              required
            >
            </textarea>
            <button className={s.button} type="submit"> Отправить сообщение </button>
          </form>
        </div>
        </div>
    </Container>
  </>
}

export default Contact
