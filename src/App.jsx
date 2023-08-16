
import styles from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Body from './Body'

const APIKEY = 'c983626fcdfe424bbbc185032231508';
const APIUrl = 'https://api.weatherapi.com/v1/current.json?key=' + APIKEY + '&q='

const getW = async (city) => {
  try {
    let res = await fetch(APIUrl + city).catch(e => console.log('error: ' + e));
    let data = await res.json();
    return data;
  } catch(e) {
    console.error(e);
  }
}

const App = () => {

  const [city, setCity] = useState('');
  const [element, setElement] = useState('');

  const handleClick = () => {
    console.log('city: ' + city);
    getW(city)
      .then(data => {
        setElement(<Body data={data}/>);
      })
      .catch(e => console.error(e));
  }

  return (
    <div className={styles.appWrapper}>
      <div className={styles.appHeader}>
        <button className={styles.appIconWrapper}>
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
        <input
          placeholder='City Name'
          onChange={e => setCity(e.target.value)}
        />
        <button 
          className={styles.appIconWrapperSearch}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.appIcon}/>
        </button>
      </div>

      <div className={styles.appBody}>
        {element}
      </div>
    </div>
  );
}

export default App;
