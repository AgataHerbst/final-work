import Heading from "../components/Heading";
import Image from 'next/image';
import { red } from '@mui/material/colors';
import { Container, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const color = red[500];

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

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

function Home() {
  return <>
  <Container fixed>
  <Heading text="Iris Backer" />
    <Image src="/backer/chef2.jpg" width={250} height={250} alt="chef" />
    <ThemeProvider theme={theme}>
    <Typography
        variant="h3"
        component="span"
        sx={{ flexGrow: 2,
        fontFamily: "Roboto",
        color:"red"
        }}

      >CAKES TO FIT ANY TASTE
      </Typography>
      </ThemeProvider>
      <ImageList sx={{ width: 1100, height: 600 }} ariant="woven" cols={3} gap={9}>
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
      </ImageList>
    </Container>

  </>

}
export default Home;