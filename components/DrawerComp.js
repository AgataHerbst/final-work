import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

function DrawerComp () {
const [open, setOpen] = useState(false);
  return (
    <>
    <Drawer open={open} onClose={() => setOpen(false)}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>
             Products
            </ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
    <IconButton sx={{marginLeft: "auto", color: "white"}} onClick={() =>(!open)}>
<MenuRoundedIcon />
    </IconButton>
    </>
  )
}

export default DrawerComp
