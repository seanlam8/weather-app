import React, {useState} from 'react'

function OneDay() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [units, setUnits] = useState('imperial')
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ac14396925ebc2571e3647167e5498ed&units=${units}`

    
}