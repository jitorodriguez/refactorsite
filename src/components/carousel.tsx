import { useState, useEffect } from 'react';

import classes from "./carousel.module.css";

const Carousel: React.FC<{images: Array<string>}> = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const automaticScroll = () => {
        if (imageIndex === props.images.length - 1) {
            return setImageIndex(0);
        }

        return setImageIndex(imageIndex + 1);
    }

    const onImageClick = () => {
        automaticScroll();
    }

    useEffect(() => {
        const interval = setInterval(() => { automaticScroll() }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className={classes.carouselContainer}>
            {props.images.map((item, index) => {
                return <img className={classes.carouselItem} style={{ transform: `translate(-${imageIndex * 100}%)` }} src={item} onClick={onImageClick} key={index}></img>
            })}
        </div>
    )
}

export default Carousel;