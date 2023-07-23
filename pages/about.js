import Heading from "../components/Heading";
//import Image from 'next/image';
import { Typography, Container } from "@mui/material";
//import s from '../styles/About.module.css';
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
    <Container maxWidth='sm'>
      <Heading text="About us:" />
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
      >Iris Backer - это уникальный вкус:<br />
        «Очень легкий и не слишком насыщенный».
        Свежие фрукты, свежие яйца, чистые взбитые сливки и сладкое масло (без искусственных ароматизаторов и консервантов) делают вкус торта Iris Backer таким же изысканным, как и внешний вид. Но хотя они выглядят невероятно богатыми, вкус удивительно легкий и нюансированный. В сочетании с бесконечным выбором слоев торта, глазури и начинки уникальный  тонкий вкус сделает торты Iris Backer незабываемым для всех в вашем списке гостей.
      </Typography>
    </Container>
  </>
}

export default About;
