import Heading from "../components/Heading";
import s from '../styles/Post.module.css';
import { Container } from '@mui/material';
import { UTurnLeftSharp } from "@mui/icons-material";

function Posts({posts}) {
//console.log(posts)
return (
    <>
    <div className={s.postHead}>
      <Heading text="Отзывы клиентов" />
      </div>
      <Container
            sx={{
            mt: '1rem'
            }}>
        <h1>Ваши комментраии:</h1>
        <ul className='posts'>
          {!!posts.length && posts.slice(0, 20).map(res => { //отображаем 20 комментариев на странице
            return (
              <li key={res.id} className='post'>
                {res.id}{' '}
                {`${res.body.slice(0, 90)}...`}
             </li>
            )
          })}
        </ul>
        </Container>
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json();

  return {
    props: {
    posts: data.slice(0.20)
    }
  }
}

export default Posts;