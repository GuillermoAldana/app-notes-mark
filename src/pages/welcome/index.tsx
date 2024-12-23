

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Home() {
  return (
    <Grid container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh'}}>
      <Grid size={12}>
        <Typography variant='h2' textAlign={'center'}>Bienvenido a la página principal</Typography>
        <Typography variant='h5' textAlign={'center'}>Este proyecto es un ejemplo de como diseñar un CRUD</Typography>
      </Grid>
    </Grid>
  )
}

export default Home;