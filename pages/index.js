import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

function Home() {
    return <>
<Heading text="Кулинарная страница" />
           <div className={styles.wrapper}>
            <h1> Iris Backer </h1>
           </div>
           </>
}

export default Home;