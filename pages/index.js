import Head from "next/head";
import Heading from "../components/Heading";
import BannerImage from "../public/cake1.jpg";


 function Home  () {
  return (
    <>
  
    <Head>
      <title>Home</title>
     </Head>
  
    <main>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
    <Heading text="Iris Backer" />
    
    </div>
    </main>
    </>
);
  }
export default Home;