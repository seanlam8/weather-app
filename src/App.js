import React, {useState} from 'react'
import ToggleSwitch from './formats/toggle'
import axios from 'axios'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [imperial, setImperial] = useState(true)

  const tempUnits = ['°F', '°C']
  const speedUnits = ['MPH','M/s']

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ac14396925ebc2571e3647167e5498ed&units=${imperial ? 'imperial' : 'metric'}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      getData()
    }
  }

  const update = () => {
    setImperial(!imperial)
    getData()
  }

  const getData = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="toggle">
        <ToggleSwitch id='units' checked={ imperial } onChange={update} optionLabels={tempUnits}/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}{imperial ? tempUnits[0] : tempUnits[1]}</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              <p>feels like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}{imperial ? tempUnits[0] : tempUnits[1]}</p> : null}
            </div>
            <div className="humidity">
              <p>humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>wind speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}{imperial ? speedUnits[0] : speedUnits[1]}</p> : null}
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
