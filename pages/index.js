import Head from "next/head";
import Heading from "../components/Heading";
//import Image from 'next/image';
import s from '../styles/index.module.css';
import { Typography } from "@mui/material";


 function Home  () {
  return (
    <>
     <Head>
      <title>Home</title>
     </Head>
     <Heading text="Iris Backer" />
    <div className={s.image}>
       <Typography
        variant="h3"
        component="span"
        sx={{ flexGrow: 1 }}
      >CAKES TO FIT ANY TASTE
      </Typography>
   </div>
    </>
);
  }
export default Home;