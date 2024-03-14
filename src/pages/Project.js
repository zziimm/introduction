import React from 'react';
import { styled } from 'styled-components';
import goniThum from "../images/goni_thum.png";

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
  background-color: azure;
  
  img {
    width: 23rem;
    height: 150px;
  }
`;

function Project(props) {
  return (
    <Inner className='mainInner'>
      <h1>Made it</h1>
      <div className='thumbnailInner'>
        <ThumbnailItem>
          <img src={goniThum}/>
        </ThumbnailItem>
        <ThumbnailItem>

        </ThumbnailItem>
      </div>
    </Inner>
  );
}

export default Project;