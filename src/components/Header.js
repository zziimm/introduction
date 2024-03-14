import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import { FaGithub, FaEnvelope  } from "react-icons/fa6";
import ProfileImg from "../images/Profile.jpg";
import { useNavigate } from 'react-router-dom';

const MainTitleBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 20px 130px;
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
  
  @media screen and (max-width: 768px) {
    padding: 10px 30px;
    
  }
`;

const TitleLogo = styled.div`
  font-weight: 700;
  font-size: 3rem;
`;
const SubIcon = styled.div`
  font-weight: 700;
  font-size: 3rem;
  
  .mailBox {
    display: inline;
    position: relative;
  }
  svg {
    cursor: pointer;
    color: black;
  }
  a + div {
    margin-left: 15px;
  }
`

const MailModalBox = styled.div`
  color: #fff;
  position: absolute;
  background: black;
  font-size: 0.8rem;
  padding: 10px 20px;
  border-radius: 15px;
  top: 70px;
  right: 0;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  opacity: 0;
  transition: .7s;

  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black;
    content: "";
    position: absolute;
    top: -9px;
    right: 15px;
  }

  ${props => props.isClicked &&
    css`
      top: 55px;
      transition: .5s;
      opacity: 1;
    `
  }
`;

const MainInner = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 90px;
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
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
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px dashed gray;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0 auto;

  .imgOutline {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .myImg {
    background-image: url(${ProfileImg});
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-position-y: 24%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .myInt {
    width: 620px;
    height: 250px;
    
    h1, h2 {
      text-align: end;
    }
    h1 {
      font-size: 4rem;
      line-height: 4.6rem;
    }
    h2 {
      font-size: 2rem;
      padding: 5px 0 30px;
    }
    .postion {
      padding-top: 20px;
    }

    p {
      font-family: "Gowun Batang", serif;
      font-weight: 400;
      font-style: normal;
      text-align: center;
      line-height: 1.7rem;
    }
    .name {
      font-size: 2rem;
      font-weight: bold;
    }
    .birthday {
      font-size: 0.9rem;
    }
    .target p {
      margin-top: 10px;
      font-size: 1.5rem;
    }
  }
`;

const Tab = styled.div`
  margin-bottom: 40px;
  ul {
    font-size: 1.5rem;
    line-height: 3rem;
    display: flex;
    justify-content: space-around;
  }
  li {
    cursor: pointer;
    display: inline-block;
  }
`;


function Header() {
  const [ mailModal, setMailModal ] = useState(false);
  const navigate = useNavigate();

  const handleMailModal = () => {
    setMailModal(!mailModal)
  }

  return (
    <>
      <header>
        <MainTitleBox>
          <TitleLogo>JStorming</TitleLogo>
          <SubIcon>
            <a href='https://github.com/zziimm' target='_blank' rel='noreferrer noopener'><FaGithub /></a>
            <div className='mailBox'>
              <FaEnvelope onClick={handleMailModal} />
              <MailModalBox isClicked={mailModal}>wlalscjs30@naver.com</MailModalBox>
              {/* { mailModal ? <MailModalBox isClicked={mailModal}>wlalscjs30@naver.com</MailModalBox> : ''} */}
            </div>
          </SubIcon>
        </MainTitleBox>
      </header>

      <MainInner>
        <InfoBox>
          <div className='imgOutline'><div className='myImg'></div></div>
          <div className='myInt'>
            <h1 className='postion'>Full-Stack Developer</h1>
            <h1 className='level'>Rookie</h1>
            <h2>with great potential</h2>
            <p className='name'>천지민</p>
            <p className='birthday'>🧁1996. 08. 30</p>
            <div className='target'>
              <p>'만약'을 생각하는 개발자</p>
              <p>이해하며 흡수하는 개발자</p>
            </div>
          </div>
        </InfoBox>
        <nav>
          <Tab>
            <ul>
              <li onClick={() => navigate('/')}>History</li>
              <li onClick={() => navigate('/skills')}>Skills</li>
              <li onClick={() => navigate('/project')}>Project</li>
              <li onClick={() => navigate('/practice')}>Practice</li>
            </ul>
          </Tab>
        </nav>
      </MainInner>
    </>
  );
}

export default Header;