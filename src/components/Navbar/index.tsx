import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ButtonLink from '../Button';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#24292e' }} elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Notes
          </Link>
        </Typography>


        <Box>
          <ButtonLink text="Inicio" route="/"></ButtonLink>
          <ButtonLink text="Notes" route="/notes"></ButtonLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;