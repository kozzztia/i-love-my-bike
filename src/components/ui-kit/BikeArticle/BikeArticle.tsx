import React from 'react'
import style from "./style.module.css"

const BikeArticle: React.FC<Props> = ({ article, className = "" }) => {
    return (
        <article className={[style.article, className].join(" ")} >
            <h6>{article?.price} USD | Rating: {article?.rating}/5</h6>
            <p>{article?.description}</p>
            <p>{article?.country}: {article?.company}</p>
            <div>
                {
                    article?.color.map((color) => (
                        <span key={color} style={{ backgroundColor: color }} title={color}></span>
                    ))
                }
            </div>
        </article>
    )
}

export default BikeArticle;

type Props = {
    article: {
        price: number,
        rating: number,
        description: string,
        country: string,
        company: string,
        color: string[],
    }
    className?: string;
}