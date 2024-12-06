import React from 'react'
import style from "./style.module.css"
import BikeLink from '../BikeLink/BikeLink'
import { getDictionary } from '../../../consts/dictionary'

const BikeDescription: React.FC<Props> = ({ title, price, rating, descritpion, status, id, category, className = "" }) => {
    return (
        <article className={[style.description, className].join(" ")}>
            <h4 className={style.title}>{`${getDictionary('bannerTitle')}: ${title}`}</h4>
            {status === "active" && <b className={style.status}>{getDictionary('bannerStatus')}</b>}
                <span className={style.price}>{`${getDictionary('bannerPrice')}: ${price}$`}</span> 
                <span className={style.rating}>{`${getDictionary('bannerRating')}: ${rating}`}</span>
            <p className={style.info}> 
                {`${getDictionary('bannerDescription')}: `}
                {descritpion}
            </p>
            <BikeLink
                title={title}
                url={`/${category}/${id}`}
                className={style.link}
            />
        </article>
    )
}

export default BikeDescription

type Props = {
    title: string,
    price: number,
    rating: number,
    descritpion: string;
    status: string;
    id: number;
    category: string;
    className?: string;
}