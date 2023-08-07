import { formatCurrency } from '@/utilities/FormatCurrency';
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext"


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
        <Card className='h-100'>
            <Card.Img
                variant='top'
                src={img}
                height='300px'
                style={
                    { objectFit: 'cover' }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="d-flex
    justify-content-between align-items-baseline
    mb-4">
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)
                    }</span>

                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={() => increaseCartQuantity(id)} variant='success' >
                            Купить</Button>
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
                                <Button onClick={() => decreaseCartQuantity(id)}variant='secondary' >-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span>в корзину
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)} variant='secondary'>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant='success' size='sm'>Удалить</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}