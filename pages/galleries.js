import { Container, Grid } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import { goods } from '../data/goods';
import s from '../styles/Galleries.module.css';
//import Search from '../components/Search';
import Footer from '../components/Footer';


function Galleries() {
  return (
  <>
    <main className={s.main}>
     <Container>
      <br />
        <h1 className={s.head}>Мои работы:</h1>
        <Container
         sx={{
          mt: '3rem'}}
        >
        <Grid container spacing={2}>
          {goods.map(good => (
            <Grid item xs="12" md="4" key={good.id}>
              <StoreItem {...good} />
            </Grid>
          ))}
        </Grid>
      </Container>
      </Container>
      <Footer />
      </main>
  </>
  )
}


export default Galleries;
