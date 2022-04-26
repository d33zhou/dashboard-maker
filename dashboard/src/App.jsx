import {useState, useEffect} from 'react';
import RandomFacts from './components/random-facts/RandomFacts';

function App() {
  
  

  return (
    <div className="App">
      
      <header>
        Dashboard Maker
      </header>

      <main>

        <div>
          <RandomFacts />
        </div>
        
      </main>

    </div>
  );
}

export default App;
