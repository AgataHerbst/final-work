import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

function DrawerComp ({links}) {
const [open, setOpen] = useState(false);
  return (
    <>
    <Drawer 
    PaperProps={{
      sx: {backgroundColor: '#8FBC8F'}
    }}
    open={open} 
    onClose={() => setOpen(false)}>
     <List>
      {links.map(({name, src}) => (
        <ListItemButton onClick={() =>setOpen(false)} key={src} divider>
          <ListItemIcon>
            <ListItemText sx={{color: 'white'}}>
              {name}
            </ListItemText>
          </ListItemIcon>
        </ListItemButton>
      ))}
     </List>
    </Drawer>
    <IconButton sx={{marginLeft: "auto", color: "white"}} onClick={() => setOpen(!open)}>
<MenuRoundedIcon />
    </IconButton>
    </>
  )
}

export default DrawerComp
