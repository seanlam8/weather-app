import React, {useState} from 'react'
import ToggleSwitch from './formats/toggle'
import Imperial from './formats/imperial'
import Metric from './formats/metric'
import axios from 'axios'

function App() {

  const [imperialData, setImperialData] = useState({})
  const [metricData, setMetricData] = useState({})
  const [location, setLocation] = useState('')
  const [imperial, setImperial] = useState(true)

  const tempUnits = ['°F', '°C']

  const urlImperial = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ac14396925ebc2571e3647167e5498ed&units=imperial`
  const urlMetric = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ac14396925ebc2571e3647167e5498ed&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(urlImperial).then((response) => {
        setImperialData(response.data)
        console.log(response.data)
      })
      axios.get(urlMetric).then((response) => {
        setMetricData(response.data)
        console.log(response.data)
      })
    }
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
        <ToggleSwitch id='units' checked={ imperial } onChange={setImperial} optionLabels={tempUnits}/>
      </div>
      {imperial 
        ? <Imperial data={ imperialData }/>
        : <Metric data={ metricData }/>
      }
    </div>
  );
}

export default App;
