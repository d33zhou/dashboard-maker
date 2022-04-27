import { TextField, Box, Paper, Typography } from '@mui/material';
import Moment from 'react-moment';
import {useState, useEffect} from 'react'

// API call limit --> 60/min, 1 million/month
const OPENWEATHER_API_KEY = ""; // REMOVE FROM PUBLIC VIEW
const API_URL_BASE = `https://api.openweathermap.org/data/2.5/`

const Weather = props => {
  const current = new Date();

  const [weather, setWeather] = useState({
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0
    },
    name: "Toronto",
    sys: {
      country: "CA",
      sunrise: 0,
      sunset: 0
    },
    visibility: 0,
    weather: [
      {
        description: "clear",
        main: "Clear"
      }
    ],
    wind: {
      deg: 0,
      gust: 0,
      speed: 0
    },
  });

  const [query, setQuery] = useState('');

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${API_URL_BASE}weather?q=${query}&units=metric&appid=${OPENWEATHER_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
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
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />

        {/* Date/Time */}
        <Typography>
          <Moment format="MMMM DD, YYYY">
            {current}
          </Moment>
        </Typography>

        {/* Temperature */}
        <Typography>
          {weather.main.temp}°C
        </Typography>
        
        {/* Forecast */}
        <Typography>
          {weather.weather[0].main}
        </Typography>

        {/* Location */}
        <Typography>
          {weather.name}
        </Typography>

      </Box>
    </Paper>
  );
};

export default Weather;