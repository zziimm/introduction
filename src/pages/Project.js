import React, { useState } from 'react';
import { styled } from 'styled-components';
import goniThum from "../images/goni_thum.png";
import myMongThum from "../images/mong_thum.png";
import GoniModal from "../components/modal/GoniModal";


const Inner = styled.div`

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 30px;
  }

  .thumbnailInner {
    display: flex;
    gap: 40px;
  }
`;

const ThumbnailItem = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 5px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: gray;
    transition: 0.5s;
    transform: scale(1.1);
  }
  
  img {
    border-radius: 15px;
    width: 23rem;
    height: 180px;
  }
  
`;

function Project() {
  const [thumModal1, setThumModal1] = useState(false);
  const [thumModal2, setThumModal2] = useState(false);
  
  const handleOpenModal = (num) => {
    switch (num) {
      case '1':
        setThumModal1(true)
        break;
      case '2':
        setThumModal2(true)
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
      </div>
      {thumModal1 ? <GoniModal handleCloseMadal={() => handleCloseMadal('1') }/> : ''}
      {/* {thumModal2 ? <GoniModal handleCloseMadal={() => handleCloseMadal('2') }/> : ''} */}
    </Inner>
  );
}

export default Project;