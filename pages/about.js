import Head from 'next/head';
import Heading from "../components/Heading";
import Image from 'next/image';
import { Typography } from "@mui/material";

function About() {
return <>
<Head>
<title>About us</title>
</Head>
  <Heading text="About us:" />
<Typography
            variant="h6"
            component="span"
            sx={{flexGrow: 1}}
            >
  <Image src="/iris3.png" width="200" height="200" alt="cake" />
  </Typography>
<Heading tag="h2" text="Уникальный вкус
                «Очень легкий и не слишком насыщенный».
                Свежие фрукты, свежие яйца, чистые взбитые сливки и сладкое масло (без искусственных ароматизаторов и консервантов) делают вкус торта Iris Backer таким же изысканным, как и внешний вид. Но хотя они выглядят невероятно богатыми, вкус удивительно легкий и нюансированный. В сочетании с бесконечным выбором слоев торта, глазури и начинки уникальный  тонкий вкус сделает торты Iris Backer незабываемым для всех в вашем списке гостей. " />
           
            
      </>
}
export default About;
