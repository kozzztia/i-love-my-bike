import style from './style.module.css';
import {getDictionary} from '../../consts/dictionary'


const TopThree = () => {
  return (
    <div className={style.topThree} id="topThree">
        <h2>{getDictionary('topThree')}</h2>
    </div>
  )
}

export default TopThree