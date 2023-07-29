import Heading from '../components/Heading';
import s from '../styles/Contact.module.css';
import Image from 'next/image';
import { Container } from '@mui/material';
import largePic from '../public/contact/color.jpg';

function Contact() {
  return <>
    <div className={s.contact}>
    <Image
      src={largePic}
      alt='color'
      placeholder="blur"
      style={{objectFit: 'cover'}}
    />
    <Container>
    <Heading text="Контакты:" />
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
      </Container>
    </div>
  </>
}


export default Contact