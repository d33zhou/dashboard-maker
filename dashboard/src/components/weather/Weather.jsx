import { TextField, Box, Paper, Typography } from '@mui/material';
import Moment from 'react-moment';
import {useState, useEffect} from 'react'

const OPENWEATHER_API_KEY = "";
const API_URL_BASE = `https://api.openweathermap.org/data/2.5/`

const Weather = props => {
  const current = new Date();

  const [weather, setWeather] = useState({
    temperature: 0,
    feels_like: 0,
    main: "Sunny",
    wind: 0
  });

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${API_URL_BASE}weather?q=Toronto&units=metric&appid=${OPENWEATHER_API_KEY}`)
        .then(res => res.json())
        .then(result => console.log(result));
    }
  };

  return (
    <Paper
      sx={{
        height: '600px',
        width: '300px',
      }}
      elevation={4}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
        }}
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
          {weather.temperature}°C
        </Typography>
        
        {/* Forecast */}
        <Typography>
          {weather.main}
        </Typography>

        {/* Location */}
        <Typography>
          Toronto, Ontario
        </Typography>

      </Box>
    </Paper>
  );
};

export default Weather;