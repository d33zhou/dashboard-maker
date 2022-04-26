import {useState, useEffect} from 'react';

import { Box, Grid } from '@mui/material';

import RandomFacts from './components/random-facts/RandomFacts';
import NavBar from './components/navigation/NavBar';

function App() {
  
  

  return (
    <div className="App">
      
      <header>
        
        <NavBar>
          Dashboard Builder
        </NavBar>

      </header>

      <main>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={1}
          sx={{
            width: '100%'
          }}
        >
          <Grid item sm={3}>
            <RandomFacts />
          </Grid>
          
          
  
        </Grid>

      </main>

    </div>
  );
}

export default App;
