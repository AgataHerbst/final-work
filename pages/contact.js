import s from '../styles/Contact.module.css';
import Image from 'next/image';
import largePic from '../public/contact/color.jpg';
import { Container, FormLabel, Button, TextField, FormControl, Typography } from '@mui/material';
import { useState } from 'react';
import { sendContactForm } from '../lib/api';


const initValues = {
   name: "",
   email: "",
   subject: "",
   message: ""
}

const initState = { values: initValues };
function Contact() {
const [state, setState] = useState(initState);

const { values, error } = state;

const handleChange = ({target}) =>
setState((prev) => ({
  ...prev,
  values: {
    ...prev.values,
    [target.name]: target.value,
  },
}));

const onSubmit = async () => {
  setState((prev) => ({
    ...prev
  }));

try {
    await sendContactForm(values);
    setState(initState)
    } catch (error) {
      console.log(error)
setState ((prev) => ({
  ...prev,
  error: error.message, 
}))
}

};
 
  return (
<Container fixed>
   <h1>Контакты:</h1>
{error && (
  <Typography>{error}</Typography>
)}

   <div className={s.contact}>
   <Image
      src={largePic}
      alt='chef'
      placeholder="blur"
     style={{objectFit: 'cover'}}
      />

<div className={s.rightSide}>
          <form className={s.form}>
          <FormControl>
           <FormLabel>Полное имя</FormLabel>
            <input className={s.input}
             type="text" 
             name="name" 
             value={values.name} 
             onChange={handleChange}
      
            />
          </FormControl>

          <FormControl>
           <FormLabel>Email</FormLabel> 
            <input className={s.input}
             type="email"
             name="email" 
             value={values.email}
             onChange={handleChange}
           
              />
             </FormControl>

             <FormControl>
              <FormLabel>Тема</FormLabel> 
            <input className={s.input}
             type="text"
             name="subject" 
             value={values.subject}
             onChange={handleChange}
             />
            </FormControl>

            <FormControl>
          <FormLabel>Сообщение</FormLabel>
            <TextField
              name="message"
              value={values.message}
              onChange={handleChange}
         
            >
            </TextField >
            </FormControl>

            <Button 
             variant="outline" 
             onClick={onSubmit}
             color="primary"
             disabled={!values.name || !values.email || !values.subject || !values.message}
             >
               Отправить сообщение</Button>
          </form>
          </div>
          </div>
       </Container>
      
  )
}

export default Contact;
       
        
       
