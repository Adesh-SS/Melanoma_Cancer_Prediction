import './AboutUS.css';
import React from 'react';
import Adesh from './Adesh S S.jpg';
import Kavin from './Kavin.jpg';
import ImageSlideshow from './Profile.js';

function US() {
    const images = [
        Adesh,Kavin
      ];
    return(
        <div class="profile">
            <ImageSlideshow images={images} /> 
        </div>
    );
}

export default US;