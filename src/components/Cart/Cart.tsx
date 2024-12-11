import React from 'react'
import { BikeType } from '../../types/BikeType'
import ToggleButton from '../ToggleButton/ToggleButton'
import style from './style.module.css'

const Cart: React.FC<Props> = ({data}) => {
  return (
    <ul className={style.list}>
        {
            data.map(bike => (
                <li key={bike.id} className={style.cart}>
                    <img src={bike.icon} alt={bike.name} />
                    <h3>{bike.title}</h3>
                    <p>{bike.price}$</p>
                    <ToggleButton id={bike.id}/>
                </li>
            ))
        }
    </ul>
  )
}

type Props = {
    data: BikeType[] 
}

export default Cart
