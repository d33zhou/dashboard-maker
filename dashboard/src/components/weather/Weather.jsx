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
      {/* Location Search */}
      <TextField
        sx={{
          width:'100%'
        }}
        label="Search for location"
        variant="filled"
      />

      {/* Date/Time */}
      <Typography>
        <Moment format="MMMM DD, YYYY">
          {current}
        </Moment>
      </Typography>

      {/* Temperature */}
      <Typography>
        15°C
      </Typography>
      
      {/* Forecast */}
      <Typography>
        Sunny
      </Typography>

      {/* Location */}
      <Typography>
        Toronto, Ontario
      </Typography>
    </Paper>
  );
};

export default Weather;