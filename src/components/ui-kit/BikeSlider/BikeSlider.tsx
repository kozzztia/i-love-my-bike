import React, { useState } from 'react';
import style from './style.module.css';
import { FaArrowLeft , FaArrowRight  } from 'react-icons/fa';

const BikeSlider: React.FC<Props> = ({ images, className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={[style.sliderWrapper, className].join(' ')}>
            <div className={style.slider}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${style.slide} ${index === currentIndex ? style.active : ''
                            }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>
            <button className={style.prevButton} onClick={prevSlide}>
                <FaArrowLeft/>
            </button>
            <button className={style.nextButton} onClick={nextSlide}>
                <FaArrowRight/>
            </button>
        </div>
    );
};

export default BikeSlider;

type Props = {
    images: string[];
    className?: string;
};
