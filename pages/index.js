import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";



const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Iris Backer" />
    </div>
);

export default Home;