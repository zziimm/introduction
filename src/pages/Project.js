import React, { useState } from 'react';
import { styled } from 'styled-components';
import goniThum from "../images/goni_thum.png";
import myMongThum from "../images/mong_thum.png";
import imjThum from "../images/IMJ_thum.jpg";
import GoniModal from "../components/modal/GoniModal";
import MongModal from "../components/modal/MongModal";
import ImjModal from '../components/modal/ImjModal';


const Inner = styled.div`

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 30px;
  }

  .thumbnailInner {
    display: flex;
    gap: 40px;
    @media screen and (max-width: 786px) {
      display: block;
    }
    @media screen and (max-width: 480px) {
      display: block;
    }
  }
  `;

const ThumbnailItem = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 5px;
  transition: 0.5s;
  cursor: pointer;
  width: 23rem;
  height: 180px;
  
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    width: 380px;
    margin: 0 auto;
    
    & + & {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 370px;
    margin: 0 auto;
    
    & + & {
      margin-top: 30px;
    }
  }
  &:hover {
    background: gray;
    transition: 0.5s;
    transform: scale(1.07);
  }
  
  img {
    border-radius: 15px;
    width: 22.2rem;
    height: 168px;
    @media screen and (max-width: 480px) {
      width: 350px;
      height: 170px;
    }

  }
`;
const ThumbnailItemMobile = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 5px;
  transition: 0.5s;
  cursor: pointer;
  
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    width: 380px;
    margin: 0 auto;
    
    & + & {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    width: 370px;
    margin: 0 auto;
    
    & + & {
      margin-top: 30px;
    }
  }
  &:hover {
    background: gray;
    transition: 0.5s;
    transform: scale(1.07);
  }
  
  img.mobile {
    border-radius: 15px;
    width: 190px;
    height: 22rem;
    @media screen and (max-width: 480px) {
      width: 350px;
      height: 170px;
    }

  }
`;

function Project() {
  const [thumModal1, setThumModal1] = useState(false);
  const [thumModal2, setThumModal2] = useState(false);
  const [thumModal3, setThumModal3] = useState(false);
  
  const handleOpenModal = (num) => {
    switch (num) {
      case '1':
        setThumModal1(true)
        break;
      case '2':
        setThumModal2(true)
        break;
      case '3':
        setThumModal3(true)
        break;
    
      default:
        break;
    }
  };
  const handleCloseMadal = (num) => {
    switch (num) {
      case '1':
        setThumModal1(false)
        break;
      case '2':
        setThumModal2(false)
        break;
      case '3':
        setThumModal3(false)
        break;
  
      default:
        break;
    }
  };

  return (
    <Inner className='mainInner'>
      <h1>Made it</h1>
      <div className='thumbnailInner'>
        <ThumbnailItem onClick={() => handleOpenModal('1')}>
          <img src={goniThum} alt='projectImg1'/>
        </ThumbnailItem>
        <ThumbnailItem onClick={() => handleOpenModal('2')}>
          <img src={myMongThum} alt='projectImg2'/>
        </ThumbnailItem>
        <ThumbnailItemMobile onClick={() => handleOpenModal('3')}>
          <img className='mobile' src={imjThum} alt='projectImg3'/>
        </ThumbnailItemMobile>
      </div>
      {thumModal1 ? <GoniModal handleCloseMadal={() => handleCloseMadal('1') }/> : ''}
      {thumModal2 ? <MongModal handleCloseMadal={() => handleCloseMadal('2') }/> : ''}
      {thumModal3 ? <ImjModal handleCloseMadal={() => handleCloseMadal('3') }/> : ''}
    </Inner>
  );
}

export default Project;