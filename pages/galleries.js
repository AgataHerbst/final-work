import { Container, Grid } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import { goods } from '../data/goods';
import s from '../styles/Galleries.module.css';
//import Search from '../components/Search';
import { useState } from 'react';


function Galleries() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
  };
  
  return (
  <>
    <main className={s.main}>
     <Container
        sx={{
          mt: '2rem'
        }}
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
  )
}


export default Galleries;
