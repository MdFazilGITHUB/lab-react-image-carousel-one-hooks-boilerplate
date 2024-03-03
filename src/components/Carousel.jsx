import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [index, setIndex] = useState(0);

  const forward = () => {
    if (index >= images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const backward = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel-container flex ">
      <div className="leftArrow arrowDiv flex" onClick={backward}>
        <ArrowBackIosIcon />
      </div>
      <h2 className="title flex">{images[index].title}</h2>
      <img src={images[index].img} alt="" />
      <h2 className="captions flex">{images[index].subtitle}</h2>
      <div className="rightArrow arrowDiv flex" onClick={forward}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Carousel;
