import Heading from "../components/Heading";
//import s from '../styles/Post.module.css';
import { Container } from "react-bootstrap";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";


function Post (){
  return (
    <>
     <Container className='py-4 text-secondary'>
      <Heading text="Сладкие комментарии:" />
      </Container>
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FF8C00" }} aria-label="recipe">
            П
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Полина"
        subheader="Август 08, 2023"
      />
      <CardMedia
        image="/backer/sweets2.jpg"
        component="img"
        sx={{ height: 200 }}
      />
      <CardContent>
        <Typography variant="body2" color="#000000">
         Благодарю от души за ваш труд. За безумно вкусную продукцию.Буду рекомендовать всем своим друзьям!!! Спасибо Ирина.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  
  </>
  )
}

export default Post;