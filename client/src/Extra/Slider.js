import { useState, useEffect } from 'react';
import image1 from '../Pictures/slideshow_one.jpg';
import image2 from '../Pictures/slideshow_two.jpg';
import image3 from '../Pictures/slideshow_three.jpg';
import styles from './Slider.module.css';

export default function Slider() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        setAllImages([image1, image2, image3]);
        setInterval(() => {
            return setSelectedImage((selectedImage) =>
                selectedImage < 2 ? selectedImage + 1 : 0
            );
        }, 4000);
    }, []);

    return (
        <div className={styles.slider_div_size}>
            {/* <div className={styles.slider_div_size}> */}
            <img
                className={styles.slider_img_size}
                src={allImages[selectedImage]}
                alt="All images"
            />
        </div>
    );
}
