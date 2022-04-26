import {useState, useEffect} from 'react';

import { Box } from '@mui/material';

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

        <Box>
          <RandomFacts />
          <RandomFacts />
          <RandomFacts />
          <RandomFacts />
        </Box>

      </main>

    </div>
  );
}

export default App;
