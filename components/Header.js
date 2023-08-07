import Navbar from "./Navbar";
import { Container } from '@mui/material';

function Header() {
    return <>
     <Container
          sx={{
           mt: '1rem'
              }}>
     <header>
       <Navbar />
       </header>
       </Container>
        </>
}

export default Header;