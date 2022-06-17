import { useState } from 'react';
import './App.css';
import { data } from './Data';

function App() {
  
  const [places, setPlaces] = useState(0);
  const {id, name, place, image, description, link} = data[places];
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState(false);

  const preciousPlace = () => {
    setPlaces(item => {
      item--;
      if (item < 0) {
        return data.length - 1;
      }
      return item;
    })
  }



  const nextPlace = () => {
    setPlaces(item => {
      item++;
      if (item > data.length - 1) {
        return item = 0;
      }
      return item;
    })
  }

  const showTextClick = () => {
    setShowMore(!showMore);
    setShowText(!showText);
  }

  return(
    <div>
        <div className='header'>
          <h1>Что посмотреть на Кавказе?</h1>
        </div>

        <div className='container'>
          <div>
            <button className='moveButton' onClick={preciousPlace}> ⤆ </button>
          </div>

          <div className='aboutPlace'>
            <h2>{id} - {name}</h2>
            <img src={image} alt="location"/>
            <h3>{place}</h3>
            <p>
              {showMore? description : description.substring(0, 150)} <span>{showMore? "" : "..."}</span>
              <button className='buttonShowMore' onClick={() => showTextClick()}>{showMore? "Свернуть" : "Далее..."}</button>
            </p>
            <p><a href={link} target="_blank" rel="noreferrer">Ссылка на источник</a></p>
          </div>

          <div>
            <button  className='moveButton' onClick={nextPlace}> ⤇ </button>
          </div>
      </div>
    </div>
  )
}

export default App;
