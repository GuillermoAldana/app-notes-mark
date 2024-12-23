import { Box } from '@mui/material';

import RoutesConfiguration from './routers';
import Navbar from './components/Navbar';

import '@fontsource/ubuntu';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#ffffffe6', minHeight: '100vh' }}>
        <RoutesConfiguration />
      </Box>
    </>
  );
};

export default App;
