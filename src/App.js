import Weather from './components/Weather';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');

  useEffect(() => {
    getData();
  },[temp]);

  useEffect(() => {
    getData();
  },[weather]);

  useEffect(() => {
    getData();
  },[wind]);

  useEffect(() => {
    getData();
  },[humidity]);

  const getData = () => {
    axios({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=mexico&appid=cd6538fbe871a8f3a4e9a9e153ac9e5e"
    }).then(response => {

      setTemp(response.data.main.temp);
      setWeather(response.data.weather[0].main);
      setWind(response.data.wind.speed);
      setHumidity(response.data.main.humidity);

    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <Weather 
      temp={temp}
      weather={weather}
      wind={wind}
      humidity={humidity}
      />
    </div>
  );
}

export default App;
