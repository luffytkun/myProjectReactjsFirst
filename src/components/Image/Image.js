import { forwardRef, useState } from "react";

import PropTypes from 'prop-types';
import {images} from "../../assets/images";

const Image = forwardRef(({src, alt, className, fallback: customFallback = images.noImage, ...props}, ref) =>{
  const [fallback, setFallback]= useState('');

  const handleError = () =>{
    setFallback(customFallback);
  }
  
  return (
    <img 
      className={className}
      ref={ref}
      src={fallback||src}
      alt= {alt}
      {...props}
      onError={handleError} />
  );
});

Image.protoType = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
  
};
export default Image;
