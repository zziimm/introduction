import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { styled } from 'styled-components';

import mintonCalendar from "../../images/mintonCalendar.png";
import mintonMap from "../../images/mintonMap.png";
import mintonMatching from "../../images/mintonMatching.png";
import mintonMyPage from "../../images/mintonMyPage.png";
import mintonClud from "../../images/mintonClud.png";
import goniThum from "../../images/goni_thum.png";

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
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }  
  /* .slick-prev:before:hover, .slick-next:before:hover {
    color: #333;
  } */

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
        <img src={goniThum} alt='goniThumImg'/>
      </div>
      <div>
        <img src={mintonMatching} alt='mintonMatchingImg'/>
      </div>
      <div>
        <img src={mintonMap} alt='mintonMapImg'/>
      </div>
      <div>
        <img src={mintonMyPage} alt='mintonMyPageImg'/>
      </div>
      <div>
        <img src={mintonCalendar} alt='mintonCalendarImg'/>
      </div>
      <div>
        <img src={mintonClud} alt='mintonCludImg'/>
      </div>
    </StyledSlide>
  );
}

export default GoniModalSlide;