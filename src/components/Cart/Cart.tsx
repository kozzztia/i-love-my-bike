import React from 'react'
import { BikeType } from '../../types/BikeType'
import ToggleButton from '../ToggleButton/ToggleButton'

const Cart: React.FC<Props> = ({data}) => {
  return (
    <section>
        <h4>{data.reduce((total, bike) => total + bike.price, 0)}</h4>
        {
            data.map(bike => (
                <div key={bike.id}>
                    <h3>{bike.title}</h3>
                    <p>{bike.price}</p>
                    <ToggleButton id={bike.id} />
                </div>
            ))
        }
    </section>
  )
}

type Props = {
    data: BikeType[] 
}

export default Cart