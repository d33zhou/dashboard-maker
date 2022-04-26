import {useEffect, useState} from 'react';
import { Paper } from '@mui/material';

const RandomFacts = props => {
  const [fact, setFact] = useState('');

  useEffect(() => {

    // returned object:
    //   {
    //     id
    //     text
    //     source
    //     source_url
    //     language
    //     permalink
    //   }
    // fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    //   .then(res => res.json())
    //   .then(result => setFact(result.text));
      
  }, []);
  
  return (
    <Paper
      sx={{ width: '25%'}}
      elevation={4}>
      {"This is some test text to make sure the formatting works fine. Lorem ipsum yadda yadda."}
    </Paper>
  );
};

export default RandomFacts;