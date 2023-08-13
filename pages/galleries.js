import { Container, Grid } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import { goods } from '../data/goods';
import Heading from "../components/Heading";
import s from '../styles/Galleries.module.css';


function Galleries() {
  return <>

    <main className={s.main}>
    <Heading text="Мои работы:" />
    <Container
        sx={{
          mt: '2rem'
        }}
      >
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
