import React, { useState } from 'react';
import './Profile.css';

function ImageSlideshow(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = props.images;

  const previousImage = () => {
    setImageIndex((imageIndex + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div className="image-slideshow">
      <img src={images[imageIndex]} alt="" />
      <div className="arrow arrow-left" onClick={previousImage}>
        &lt;
      </div>
      <div className="arrow arrow-right" onClick={nextImage}>
        &gt;
      </div>
    </div>
  );
}

export default ImageSlideshow;
