import { useState } from 'react';
import Head from 'next/head';
import Heading from "../components/Heading";
import { Container } from '@mui/material';
import Basket from '../components/Basket';
import GoodsList from '../components/GoodsList';
import Search from '../components/Search';
import Snack from '../components/Snack';
import { goods } from '../data/goods';


function Galleries() {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

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

const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
        (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
        quantity = order[indexInOrder].quantity + 1;

        setOrder(order.map((item) => {
            if (item.id !== goodsItem.id) return item;

            return {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity,
            };
        }),
        );
    } else {
        setOrder([
            ...order,
            {
                id: goodsItem.id,
                name: goodsItem.name,
                price: goodsItem.price,
                quantity,
            },
        ],
        );
    }
    setSnackOpen(true);
};

const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
};

  return <>
  <Head handleCart={() => setCartOpen(true)}
        orderLen={order.length}>
    <title>Galleries</title>
  </Head>
  <Heading text="Galleries:"/>
  <Container
                sx={{
                    mt: '1rem'
                }}>
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />

            </Container>
            <Basket
                order={order}
                removeFromOrder={removeFromOrder}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
            <Snack 
            
            isOpen={isSnackOpen}
            handleClose={() => setSnackOpen(false)}
            />
        </>
}

export default Galleries;