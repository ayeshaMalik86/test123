// src/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { CardMedia } from '@mui/material';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <CardMedia
          key={index}
          component="img"
          height="400"
          image={image}
          alt={`Product Image ${index + 1}`}
        />
      ))}
    </Slider>
  );
};

export default ImageCarousel;
