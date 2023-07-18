import Head from 'next/head';
import Heading from "../components/Heading";
import Image from 'next/image';
import { Typography } from "@mui/material";
import s from '../styles/About.module.css';

function About() {
  return <>
    <div className={s.about}>
      <div className={s.aboutBottom}>
        <Head>
          <title>About us</title>
        </Head>
      </div>
      <Heading text="About us:" />
      <Typography
        variant="h6"
        component="span"
        sx={{ flexGrow: 1 }}
      >
        <Image src="/img/iris3.jpg" width={500} height={500} alt="cake" />
      </Typography>
      <Heading tag="h2" text="Уникальный вкус
                «Очень легкий и не слишком насыщенный».
                Свежие фрукты, свежие яйца, чистые взбитые сливки и сладкое масло (без искусственных ароматизаторов и консервантов) делают вкус торта Iris Backer таким же изысканным, как и внешний вид. Но хотя они выглядят невероятно богатыми, вкус удивительно легкий и нюансированный. В сочетании с бесконечным выбором слоев торта, глазури и начинки уникальный  тонкий вкус сделает торты Iris Backer незабываемым для всех в вашем списке гостей. " />
       </div>
  </>
}

export default About;
