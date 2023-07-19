import { ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";


function Header({handleCart, orderLen}) {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography
            variant="h6"
            component="span"
            sx={{flexGrow: 1}}
            >
            IRIS BACKER
            </Typography>
            <IconButton
            color="inherit"
            onClick={handleCart}
            >
              <Badge 
              color='secondary'
              badgeContent={orderLen}
              >
                <ShoppingCart />
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header