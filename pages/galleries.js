import { Container, Grid } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import { goods } from '../data/goods';
import s from '../styles/Galleries.module.css';


function Galleries() {
  return <>
  <main className={s.main}>
    <Container 
      >
    <h1 className={s.head}>Мои работы:</h1>
       <Grid container spacing={2}>
          {goods.map(good => (
            <Grid item xs="12" md="4" key={good.id}>
              <StoreItem {...good} />
            </Grid>
          ))}
        </Grid>
   </Container>
    </main>
  </>
}


export default Galleries;
