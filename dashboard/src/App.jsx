import {useState, useEffect} from 'react';
import RandomFacts from './components/random-facts/RandomFacts';
import { Box } from '@mui/material';

function App() {
  
  

  return (
    <div className="App">
      
      <header>
        Dashboard Builder
      </header>

      <main>

        <Box>
          <RandomFacts />
        </Box>

      </main>

    </div>
  );
}

export default App;
