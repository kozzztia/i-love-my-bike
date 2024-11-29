import style from './style.module.css';
import { getDictionary } from '../../consts/dictionary';
import { useEffect } from 'react';


const Top = () => { 
    useEffect(() => {
        fetch('https://funny-fudge-ddda7b.netlify.app/api/topThree')
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        });
    },[])
  
  return (
    <div className={style.top} id="top">
        <h4>{getDictionary('topTitle')}</h4>
    </div>
  )
}

export default Top