import React from 'react'
import { BikeType } from '../../types/BikeType'
import ToggleButton from '../ToggleButton/ToggleButton'
import style from './style.module.css'
import { getDictionary } from '../../consts/dictionary'

const Cart: React.FC<Props> = ({ data }) => {
    if(data.length === 0) return <p className={style.empty}>{getDictionary('cartEmpty')}</p>
    return (
        <ul className={style.list}>           
            {
                data.map(bike => (
                    <li key={bike.id} className={style.cart}>
                        <img src={bike.icon} alt={bike.name} />
                        <article>
                            <h3>{bike.title}</h3>
                            <strong>{bike.price}$</strong>
                            <p>{bike.description}</p>
                            <ToggleButton id={bike.id} />
                        </article>
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
