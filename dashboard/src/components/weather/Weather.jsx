import { TextField, Box, Paper, Typography } from '@mui/material';
import Moment from 'react-moment';
import {useEffect} from 'react'

const Weather = props => {
  const current = new Date();

  return (
    <Paper
      sx={{
        height: '600px',
        width: '300px'
      }}
      elevation={4}
    >
      <TextField
        sx={{
          width:'100%'
        }}
        label="Search for location"
        variant="filled"
      />

      <Typography>
        <Moment interval={1000}>
          {current}
        </Moment>
      </Typography>
    </Paper>
  );
};

export default Weather;