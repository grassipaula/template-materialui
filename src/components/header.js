import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { HeaderContainer } from '../pages/styles/styles.js';
import { List } from '@phosphor-icons/react';

//import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <List size={24} color='white' />
              
            </IconButton>
            
            <Typography>
              <HeaderContainer>Gerenciamento de Projetos</HeaderContainer>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;