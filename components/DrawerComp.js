import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: '#8FBC8F' }
        }}
        open={open}
        onClose={() => setOpen(false)}>
        <List>
          {links.map(({ name, src }) => (
            <ListItemButton onClick={() => setOpen(false)} key={src} divider>
              <ListItemIcon>
                <ListItemText
                  key={name} className={pathname === src
                    ? 'active'
                    : ''}
                >
                  <Link href={src} className="link text-white">{name}</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto", color: "white" }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
