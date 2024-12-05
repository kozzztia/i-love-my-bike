import React from 'react'
import style from "./style.module.css"

const BikeDescription: React.FC<Props> = ({ title, price, rating, descritpion, status,className = "" }) => {
    console.log(title, price, rating, descritpion, status)
    return (
        <article className={[style.description , className].join(" ")}>
            <h6>{title}</h6>    

                <span className={style.active}>
                    {status === "active" && <p>{price * 0.75}</p>} 
                    <p>{price}</p> <p>{rating}</p>
                </span>
            <p>
                {descritpion}
            </p>
        </article>
    )
}

export default BikeDescription

type Props = {
    title: string,
    price: number,
    rating: number,
    descritpion: string;
    status : string;
    className?: string;
}