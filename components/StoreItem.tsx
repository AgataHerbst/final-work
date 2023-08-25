import { formatCurrency } from '@/utilities/FormatCurrency';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Card, CardMedia, CardContent, Typography } from "@mui/material";


type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
}

export function StoreItem({ id, name, price, img }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id)

    return (
        <Card>
            <CardMedia
                image={img}
                component='img'
                alt={name}
                title={name}
                sx={{ height: 300 }}
            />

            <CardContent>
                <Typography
                    variant='h6'
                    component='h3'
                >
                    {name}
                </Typography>

                <Typography variant='body1'>Цена: {formatCurrency(price)
                }</Typography>

            </CardContent>
            <div className='mt-auto'>
                {quantity === 0 ? (
                    <Button variant="contained" onClick={() => increaseCartQuantity(id)} >
                        Добавить в корзину</Button>
                ) :
                    <div
                        className='d-flex align-items-center
 flex-column'
                        style={{ gap: '.5rem' }}>

                        <div
                            className='d-flex aline-items-center
            justify-content-center'
                            style={{ gap: '5.rem' }}
                        >
                            <Button onClick={() => decreaseCartQuantity(id)} variant="contained">-</Button>
                            <div>
                                <span className='fs-3'>{quantity}</span>в корзину
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)} variant="contained">+</Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} variant="contained" size='medium'>Удалить</Button>
                    </div>}
            </div>
        </Card>

    )
};