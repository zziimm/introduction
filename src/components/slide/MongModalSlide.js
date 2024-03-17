import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { styled } from 'styled-components';

import mongMain from "../../images/mongMain.png";
import mongCredit from "../../images/mongCredit.png";
import mongMall from "../../images/mongMall.png";
import mongMap from "../../images/mongMap.png";
import mongPer from "../../images/mongPer.png";
import mongPerItem from "../../images/mongPerItem.png";
import mongdaily from "../../images/mongdaily.png";
import mongvin from "../../images/mongvin.png";
import mongChat from "../../images/mongChat.png";


function GoniModalSlide() {
  const StyledSlide = styled(Slider)`
  /* position: relative; */
  & div {
    position: relative;
  }
    
  .slick-list {
    width: 750px;
    height: 400px;
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
    color: black;
    -webkit-font-smoothing: antialiased;
  }  

  img {
    width: 750px;
    height: 400px;
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
        <img src={mongMain} alt='mongMainImg'/>
      </div>
      <div>
        <img src={mongPer} alt='mongPerImg'/>
      </div>
      <div>
        <img src={mongMap} alt='mongMapImg'/>
      </div>
      <div>
        <img src={mongdaily} alt='mongdailyImg'/>
      </div>
      <div>
        <img src={mongvin} alt='mongvinImg'/>
      </div>
      <div>
        <img src={mongChat} alt='mongChatImg'/>
      </div>
      <div>
        <img src={mongMall} alt='mongMallImg'/>
      </div>
      <div>
        <img src={mongPerItem} alt='mongPerItemImg'/>
      </div>
      <div>
        <img src={mongCredit} alt='mongCreditImg'/>
      </div>
    </StyledSlide>
  );
}

export default GoniModalSlide;