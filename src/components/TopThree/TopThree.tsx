import style from './style.module.css';
import {getDictionary} from '../../consts/dictionary'


const TopThree = () => {
  return (
    <div className={style.topThree} id="top">
        <h2>{getDictionary('top')}</h2>
    </div>
  )
}

export default TopThree