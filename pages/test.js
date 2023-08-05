import { useState } from 'react';
import Heading from "../components/Heading";
import { Container } from '@mui/material';
import GoodsList from '../components/GoodsList';
import Search from '../components/Search';
import Snack from '../components/Snack';
import { goods } from '../data/goods'; //набор товаров
import s from '../styles/Galleries.module.css';

function Galleries() {
    const [order, setOrder] = useState([]); //заказ управляется по кнопке купить
    const [search, setSearch] = useState(''); //поиск управляется кнопкой search
    const [products, setProducts] = useState(goods);
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
    return <>
        <main className={s.main}>
            <div className={s.galleriesHead}>
            <Heading text="Мои работы:" />
            </div>
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
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)}
            />
        </main>
    </>
}

export default Galleries;