import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const GoodsItem = (props) => {
    const { name, price, image, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
            sx={{
                height: '100%'
            }}>
                <CardMedia
                    image={image}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{ height: 400}}
                />
                <CardContent>
                    <Typography
                    variant='h6'
                    component='h3'
                    >
                        {name}
                    </Typography>
                    <Typography
                    variant='body1'>Цена: {price} руб.</Typography>
                     </CardContent>
                     <CardActions>
                    <Button
                    variant='text'
                       onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                    </CardActions>
                </Card>
        </Grid>
    );
};

export default GoodsItem;