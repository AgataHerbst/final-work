import { Container } from "@mui/material";
import s from '../styles/About.module.css';
import ImageList from "@mui/material/Box";
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const data = [
  {
    img: '/aboutImg/cake1.jpg'
  },
  {
    img: '/aboutImg/cake6.jpg'
  },
  {
    img: '/aboutImg/cake4.jpg'
  },
  {
    img: '/aboutImg/coffee.jpg'
  },
  {
    img: '/aboutImg/flowerCake.jpg'
  },
  {
    img: '/aboutImg/cake9.jpg'
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


export default function About() {

  return (
    <main className={s.main}>
      <Container>
        <h1 className={s.head}>Обо мне:</h1>
        <ThemeProvider theme={theme}>
          <ImageList
            sx={{
              height: 500,
              display: "grid",
              gridTemplateColumns: {
                mobile: "repeat(1, 1fr)",
                bigMobile: "repeat(2, 1fr)",
                tablet: "repeat(3, 1fr)",
                desktop: "repeat(6, 1fr)"
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

          </ImageList>
        </ThemeProvider>
        <div className={s.text}>
          <p>Я вас приветствую, мои Дорогие Гости!<br />
            Меня зовут Иришка и я очень люблю печь и изготавливать всевозможные торты. Для своих тортов я использую только натуральные продукты, чтобы вкус моей выпечки навсегда остался в вашей вкусовой памяти. Каждый день я нахожу новые идеи для своих шедевров и воплощаю их в жизнь, чтобы радовать тех, кто ОБОЖАЕТ вкусные сладости!!!
          </p>
        </div>
      </Container>
    </main>
  );
}


