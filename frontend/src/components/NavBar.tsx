
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

import { routesConfig } from '../routesConfig';


const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {"Josh Keisler\nWeb Resume"}
        </Typography>
        <Box>
          {
            routesConfig.map(({path, label}) => (
              <Button color="inherit" component={Link} to="{path}">{label}</Button>
            ))
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
