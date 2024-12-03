import React from 'react'
import style from "./style.module.css"

const BikeArticle: React.FC<Props> = ({ article, className = "" }) => {
    console.log(article)
    return (
        <article className={[style.article, className].join(" ")} >
            <h6>{article?.price} {article?.rating}</h6>
            <p>{article?.description}</p>
            <p>{article?.country}: {article?.company}</p>
            {
                article?.color.map((color) => (
                    <p key={color}>{color}</p>
                ))
            }
        </article>
    )
}

export default BikeArticle;

type Props = {
    article: {
        price: number, 
        rating: number,
        description:string,
        country:string, 
        company:string,
        color: string[],
    }
    className ?: string;
}