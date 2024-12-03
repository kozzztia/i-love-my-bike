import React from 'react'
import style from "./style.module.css"
import { getDictionary } from '../../../consts/dictionary'

const BikeImage: React.FC<Props>= ({src, title, name, className=""}) => {
  return (
    <figure className={[style.figure, className].join(" ")}>
        <img src={src} alt={name}/>
        {title && <figcaption><h4>{getDictionary("bikeTitle") + " " + title}</h4></figcaption>}
    </figure>
  )
}

export default BikeImage

type Props = {
    src : string;
    name :string;
    title?: string;
    className?: string;
}