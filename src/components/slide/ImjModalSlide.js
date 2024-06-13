import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { styled } from 'styled-components';

import imj_thum from "../../images/IMJ_thum.jpg";
import imj_01 from "../../images/IMJ_01.jpg";
import imj_02 from "../../images/IMJ_02.jpg";
import imj_03 from "../../images/IMJ_03.jpg";
import imj_04 from "../../images/IMJ_04.jpg";

function ImjModalSlide() {
  const StyledSlide = styled(Slider)`
  /* position: relative; */
  & div {
    position: relative;
  }
    
  .slick-list {
    width: 380px;
    height: 500px;
    margin: 0 auto;
    background-color: #cccccc;
    /* overflow: hidden; */
  }
  
  .slick-prev, .slick-next {
    position: absolute;
    z-index: 1;
  }
  .slick-prev {
    left: 30px;
  }
  .slick-next {
    right: 48px;

  }

  .slick-prev:before, .slick-next:before{
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }  
  /* .slick-prev:before:hover, .slick-next:before:hover {
    color: #333;
  } */

  img {
    width: 380px;
    height: 500px;
  }
`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSlide {...settings}>
      <div>
        <img src={imj_thum} alt='imj_thum'/>
      </div>
      <div>
        <img src={imj_01} alt='imj_01'/>
      </div>
      <div>
        <img src={imj_02} alt='imj_02'/>
      </div>
      <div>
        <img src={imj_03} alt='imj_03'/>
      </div>
      <div>
        <img src={imj_04} alt='imj_04'/>
      </div>
    </StyledSlide>
  );
}

export default ImjModalSlide;