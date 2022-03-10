import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="pandora__features-container__feature">
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
        <div className="pandora__features-container__feature-title">
          <div />
          <h1>{title}</h1>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="pandora__features-container_feature-text">
          <p>{text}</p>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Feature;
