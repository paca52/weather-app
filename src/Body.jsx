
import styles from './Body.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet } from '@fortawesome/free-solid-svg-icons'

const Body = ({ data }) => {

  if(data.location == undefined || data.current == undefined) {
    return <div className={styles.bodyError}>Invalid location!</div>;
  }

  let temp, city, humidity, wind_kph, icon;

  console.log(data);
  temp = data.current.feelslike_c,
  city = data.location.name,
  humidity = data.current.humidity,
  wind_kph = data.current.wind_kph;
  icon = data.current.condition.icon;

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.bodyCityName}>
        {city + ' '}
      </div>
      <div className={styles.bodyTemp}>
        <img src={icon} className={styles.bodyCondition}/>
        {temp}°C 
      </div>
      <div className={styles.bodyWindHum}>
        <div className={styles.bodyWind}>
          <FontAwesomeIcon icon={faWind} />
          {wind_kph}kph
        </div>
        <div className={styles.bodyHum}>
          <FontAwesomeIcon icon={faDroplet} />
          {humidity}%
        </div>
      </div>
    </div>
  );
}

export default Body;
