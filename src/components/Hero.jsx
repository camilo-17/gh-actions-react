import React, { useState } from 'react';

import { fadeInLeft, fadeInDown, fadeInUp, fadeInRight, zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import './styles/Hero.css';

import exImg from '../../assets/ex.png';
import cirleImg from '../../assets/circle.png';
import squareImg from '../../assets/square.png';
import triangleImg from '../../assets/triangle.png';

const styles = StyleSheet.create({
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '5s',
    },
    fadeInDown: {
        animationName: fadeInDown,
        animationDuration: '5s',
    },
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '5s',
    },
    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '5s',
    },
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '5s',
    },
});

function Hero() {
    const [showImage, setShowImage] = useState(false);

    setTimeout(() => {
        setShowImage(true);
    }, 7000);

    return (
        <div className="play-container">
            <div className="images-play-container">
                <img className={css(styles.fadeInLeft)} src={triangleImg} alt="triangle" />
                <img className={css(styles.fadeInUp)} src={squareImg} alt="square" />
                <img className={css(styles.fadeInDown)} src={cirleImg} alt="circle" />
                <img className={css(styles.fadeInRight)} src={exImg} alt="ex" />
            </div>
            {showImage ? <h3 className={css(styles.zoomIn)}>Status playing ...</h3> : <h3></h3>}
        </div>
    );
}

export default Hero;
