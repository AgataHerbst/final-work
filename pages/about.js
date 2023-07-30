import Heading from "../components/Heading";
import { Typography, Container } from "@mui/material";
import s from '../styles/About.module.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const data = [
  {
    img: '/aboutImg/cake1.jpg'
  },
  {
    img: '/aboutImg/cake6.jpg'
  },
  {
    img: '/aboutImg/cake4.jpg'
  },
  {
    img: '/aboutImg/coffee.jpg'
  },
  {
    img: '/aboutImg/flowerCake.jpg'
  },
  {
    img: '/aboutImg/cake9.jpg'
  },
]

function About() {
  return <>
    <main className={s.main}>
      <Container maxWidth='sm'>
        <Heading text="Обо мне:" />
        <Typography
          variant="h6"
          component="span"
          sx={{ flexGrow: 1 }}
        >
          <ImageList sx={{ width: 600, height: 600 }} cols={3} rowHeight={164}>
            {data.map((item) => (
              <ImageListItem key={item.img}>

                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                />

              </ImageListItem>
            ))}
          </ImageList>
        </Typography>
      </Container>
      <Container maxWidth='lg'>
        <Typography
          variant="h6"
          component="span"
          sx={{ flexGrow: 1 }}
        >Я вас приветствую, мои Дорогие Гости!<br />
          Меня зовут Иришка и я очень люблю печь и изготавливать всевозможные торты. Для своих тортов я использую только натуральные продукты, чтобы вкус моей выпечки навсегда остался в вашей вкусовой памяти. Каждый день я нахожу новые идеи для своих шедевров и воплощаю их в жизнь, чтобы радовать тех, кто ОБОЖАЕТ вкусные сладости!!!
        </Typography>
      </Container>
    </main>
  </>
}

export default About;
