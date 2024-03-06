import React from 'react';
import { styled } from 'styled-components';
import ProfileImg from "../images/Profile.jpg";

const MainInner = styled.div`
  width: 768px;
  /* height: 100vh; */
  margin: 0 auto;
  padding-top: 90px;


  /* @media screen and (max-width: 1055px) {
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media screen and (max-width: 1728px) {
    width: 1376px;
  } */
`;

const InfoBox = styled.div`
  width: 36rem;
  margin: 0 auto;
  `;

const ImgBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  justify-content: center;
  align-items: center;

  .myImg {
    background-image: url(${ProfileImg});
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-position-y: 24%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .myInt {
    padding-left: 15px;
    
    p + p {
      margin-top: 10px;
    }
  }
  `;
const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;

function MainPage(props) {
  return (
    <MainInner>
      <InfoBox>
        <ImgBox>
          <div className='myImg' />
          <div className='myInt'>
            <p>천지민</p>
            <p>풀스택 개발자를 꿈꾸는 천지민입니다.</p>
          </div>
        </ImgBox>
        <ContactBox>
          
        </ContactBox>
      </InfoBox>
    </MainInner>
  );
}

export default MainPage;