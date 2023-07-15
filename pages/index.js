import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";


 function Home  () {
  return (
    <>
  
    <Head>
      <title>Home</title>
     </Head>
  
    <main>
    <div className={styles.wrapper}>
    <Heading text="Iris Backer" />
    
    </div>
    </main>
    </>
);
  }
export default Home;