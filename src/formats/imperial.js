import React from 'react'
import PropTypes from "prop-types";

const Imperial = ({data}) => {
    
    return (
        <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              <p>feels like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            </div>
            <div className="humidity">
              <p>humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>wind speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
            </div>
          </div>
        }



      </div>
    )
}

Imperial.propTypes = {
    data: PropTypes.object.isRequired
}

export default Imperial;