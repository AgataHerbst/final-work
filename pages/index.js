import Link from 'next/link';
import Heading from "../components/Heading";
import Image from 'next/image';
import { Typography, Button, Container } from "@mui/material";
import Box from '@mui/material/Box';
import ImageListItem, {imageListItemClasses} from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from '../components/Footer';

const data = [
  {
    img: '/backer/cake1.jpg'
  },
  {
    img: '/backer/honey.jpg'
  },
  {
    img: '/backer/cake5.jpg'
  },

]

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 400,
      tablet: 700,
      desktop: 900
    }
  }
});

export default function Home() {
  return (
    <>
     <main>
      <Container
      sx={{
        mt: '3rem'}}
      >
    <Heading />
  <Link href='galleries'><Button variant="contained">Все торты</Button></Link>
      <Image src="/backer/chef2.jpg" width={200} height={200} alt="chef" />
      <Typography
        variant="h3"
        component="span"
        sx={{
          flexGrow: 2,
          fontFamily: "Roboto",
          color: "red"
        }}
       >ТОРТЫ НА ЛЮБОЙ ВКУС
      </Typography>
      <ThemeProvider theme={theme}>
      <Box
             sx={{
              height: 500,
              display: "grid",
              gridTemplateColumns: {
              mobile: "repeat(1, 1fr)",
              bigMobile: "repeat(3, 1fr)",
              tablet: "repeat(3, 1fr)",
              desktop: "repeat(3, 1fr)"
              },
              [`& .${imageListItemClasses.root}`]: {
                display: "flex",
                flexDirection: "column"
              }
            }}
          >
          {data.map((item) => (
          <ImageListItem key={item.img}>
             <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
        </ImageListItem>
          
        ))}
      </Box>
      </ThemeProvider>
     </Container>
     <Footer />
      </main>
      </>
  )

}
