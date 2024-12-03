import React from 'react'
import style from "./style.module.css";

const BikeSlider: React.FC<Props> = ({ images, className }) => {
    return (
        <div className={[style.slider, className?className:""].join(" ")}>
            {
                images.map((image, index) => <img key={index} src={image}/>)
            }
        </div>
    )
}

export default BikeSlider

type Props = {
    images: string[];
    className?: string;
}