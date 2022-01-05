import React from 'react';

import { fadeInLeft, fadeInDown, fadeInUp, fadeInRight, zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import './styles/Hero.css';

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
    return (
        <div className="play-container">
            <div className="images-play-container">
                <img className={css(styles.fadeInLeft)} src="./assets/triangle.png" alt="triangle" />
                <img className={css(styles.fadeInUp)} src="./assets/square.png" alt="triangle" />
                <img className={css(styles.fadeInDown)} src="./assets/circle.png" alt="triangle" />
                <img className={css(styles.fadeInRight)} src="./assets/ex.png" alt="triangle" />
            </div>
            <h3 className={css(styles.zoomIn)}>Status playing ...</h3>
        </div>
    );
}

export default Hero;
