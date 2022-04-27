import {useEffect, useState} from 'react';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';

const RandomFacts = props => {
  const [fact, setFact] = useState({
    text: "No facts yet!",
    source: "No sources either."
  });

  useEffect(() => {

    // returned object:
    //   {
    //     id         --> for permalink
    //     text       --> the fact
    //     source     --> 3rd-party site name
    //     source_url --> to 3rd-party site
    //     language   --> use 'en' only
    //     permalink  --> to random useless facts site
    //   }
    // fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    //   .then(res => res.json())
    //   .then(result => setFact({
    //     text: result.text,
    //     source: result.source
    //   }));
      
  }, []);
  
  return (
    <Paper
      sx={{
        height: '300px',
        width: '300px'
      }}
      elevation={4}
    >
      <Stack
        sx={{
          height: '100%',
          width: '100%'
        }}
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography
            sx={{
              mb: 1
            }}
          >
            {fact.text}
          </Typography>
          
          <Typography>
            - {fact.source}
          </Typography>
        </Box>
        

        <Box>
          <Divider />

          <Typography
            sx={{
              fontSize: 10
            }}
          >
            Random Useless Facts API
          </Typography>
        </Box>

      </Stack>
    </Paper>
  );
};

export default RandomFacts;