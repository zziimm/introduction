import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { FaGithub, FaEnvelope  } from "react-icons/fa6";
import ProfileImg from "../images/Profile.jpg";
import { useNavigate } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";

const MainTitleBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 20px 130px;
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
  
  @media screen and (max-width: 786px) {
    padding: 20px 40px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 20px;
    width: 100%;
  }


`;

const TitleLogo = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 3rem;

  .wrapper {
    position: relative;
    width: 235px;
    height: 70px;
    white-space: nowrap;
    @media screen and (max-width: 786px) {
      width: 0;
      height: 0;
    }
    @media screen and (max-width: 480px) {
      width: 0;
      height: 0;
    }
  }

  .focus {
    text-transform: uppercase;
    letter-spacing: 2px;
    filter: blur(3px);
    font-size: 65px;
    opacity: 0.6;
    @media screen and (max-width: 786px) {
      text-transform: none;
      font-size: 3.6rem;
      letter-spacing: 0px;
      opacity: 1;
    }
    @media screen and (max-width: 480px) {
      text-transform: none;
      font-size: 2.4rem;
      letter-spacing: 0px;
      opacity: 1;
    }
  }

  .mask {
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 65px;
    clip: rect(0px,100px,80px,0px);
    background: linear-gradient($target, $target 0) no-repeat,
      linear-gradient(to right, $target, $target 0) no-repeat,
      linear-gradient(to right, $target, $target 0) bottom left no-repeat,
      linear-gradient(to right, $target, $target 0) bottom left no-repeat,
      linear-gradient($target, $target 0) bottom right no-repeat,
      linear-gradient($target, $target 0) bottom right no-repeat,
      linear-gradient($target, $target 0) top right no-repeat,
      linear-gradient($target, $target 0) top right no-repeat;
    background-size: 10px 2px, 2px 10px, 2px 10px, 10px 2px, 2px 10px, 10px 2px, 10px 2px, 2px 10px, 10px 2px;
    padding: 5px;
    transform: translateX(0);
    box-sizing: border-box;
    animation: mask 2.5s ease infinite alternate;

    @media screen and (max-width: 786px) {
      text-transform: none;
      letter-spacing: 0px;
      font-size: 3.6rem;
      padding-top: 5px;
      letter-spacing: 0px;
      clip: rect(0px,80px,80px,0px);
    }
    @media screen and (max-width: 480px) {
      text-transform: none;
      letter-spacing: 0px;
      font-size: 2.4rem;
      padding-top: 5px;
      letter-spacing: 0px;
      clip: rect(0px,80px,50px,0px);
    }
  }

  .text {
    transform: translateX(0);
    animation: text 2.5s ease infinite alternate;
  }

  @keyframes mask {
    to {
      transform: translateX(340px);
    }
  }
  @media screen and (max-width: 786px) {
    @keyframes mask {
      to {
        transform: translateX(180px);
      }
    }
  }
  @media screen and (max-width: 480px) {
    @keyframes mask {
      to {
        transform: translateX(100px);
      }
    }
  }
  
  @keyframes text {
    to {
      transform: translateX(-340px);
    }
  }

  @media screen and (max-width: 786px) {
    @keyframes text {
      to {
        transform: translateX(-180px);
      }
    }
  }
  @media screen and (max-width: 480px) {
    @keyframes text {
      to {
        transform: translateX(-100px);
      }
    }
  }
`;

const SubIcon = styled.div`
  font-weight: 700;
  font-size: 3rem;
  padding-top: 10px;
  @media screen and (max-width: 786px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.3rem;
  }
  .mailBox {
    display: inline;
    position: relative;
  }
  svg {
    cursor: pointer;
    color: black;
    transition: 0.3s;
    &:hover {
      color: gray;
      transition: 0.3s;
    }
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

  @media screen and (max-width: 480px) {
    top: 45px;
    right: -5px;
  }

  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black;
    content: "";
    position: absolute;
    top: -9px;
    right: 15px;
    @media screen and (max-width: 480px) {
      top: -9px;
      right: 12px;
    }
  }

  ${props => props.$isClicked &&
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
  
  @media screen and (max-width: 1250px) {
    width: 1000px;
  }
  @media screen and (max-width: 1024px) {
    width: 800px;
  }
  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  padding-bottom: 50px;
  border-bottom: 1px dashed gray;
  justify-content: space-between;
  margin: 0 auto;


  @media screen and (max-width: 786px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }

  .imgOutline {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      width: 350px;
      height: 350px;
      margin: 0 auto;
    }
    @media screen and (max-width: 480px) {
      width: 220px;
      height: 220px;
      margin: 0 auto;
    }
  }

  .myImg {
    background-image: url(${ProfileImg});
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-position-y: 24%;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1024px) {
      width: 330px;
      height: 330px;
    }
    @media screen and (max-width: 480px) {
      width: 210px;
      height: 210px;
    }
  }
  
  .myInt {
    width: 620px;
    height: 250px;
    @media screen and (max-width: 1024px) {
      width: 400px;
    }
    @media screen and (max-width: 786px) {
      width: 100%;
      margin-bottom: 100px;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-bottom: 100px;
    }
    
    h1, h2 {
      text-align: end;
      @media screen and (max-width: 786px) {
        text-align: center;
      }
      @media screen and (max-width: 480px) {
        text-align: center;
      }
    }
    h1 {
      font-size: 4rem;
      line-height: 4.6rem;
      @media screen and (max-width: 1024px) {
        font-size: 3.5rem;
        line-height: 3.5rem;
        
      }
      @media screen and (max-width: 480px) {
        font-size: 3rem;
        line-height: 3.6rem;
      }
    }

    h2 {
      font-size: 2rem;
      padding: 5px 0 30px;
      @media screen and (max-width: 480px) {
        font-size: 1.5rem;
      }
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
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
  ul {
    font-size: 1.5rem;
    line-height: 3rem;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 480px) {
      padding-top: 10px;
    }
  }
  li {
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    &:hover {
      color: gray;
      text-decoration: underline;
      transition: 0.3s;
    }
  }
  li.active {
    color: gray;
    text-decoration: underline;
    transition: 0.3s;
  }
`;


function Header() {
  const [ mailModal, setMailModal ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const btn = document.querySelectorAll(".button");
    btn.forEach( function (btn, i) {
      if (window.location.href.split('/').pop() === btn.innerHTML.toLocaleLowerCase()) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const mainpage = document.querySelector(".mainpage");
    if (window.location.href.split('/').pop() === '') {
      mainpage.classList.add("active");
    } else {
      mainpage.classList.remove("active");
    }
  }, [])
  

  const handleMailModal = () => {
    setMailModal(!mailModal)
  }
  const handleBtnEffect = (e) => {
    const btn = document.querySelectorAll(".button");
    btn.forEach( function (btn, i) {
      if (e.currentTarget === btn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    })
    console.log(window.location.href.split('/'));
  }

  return (
    <>
      <header>
        <MainTitleBox>
          <TitleLogo>
            <div onClick={() => navigate('/')} className="wrapper">
              <div className="focus">
                JStorming
              </div>
              <div className="mask">
                <div className="text">JStorming</div>
              </div>
            </div>
          </TitleLogo>
          <SubIcon>
            <a href='https://github.com/zziimm' target='_blank' rel='noreferrer noopener'><FaGithub /></a>
            <div className='mailBox'>
              <FaEnvelope onClick={handleMailModal} />
              <MailModalBox $isClicked={mailModal}>wlalscjs30@naver.com</MailModalBox>
            </div>
          </SubIcon>
        </MainTitleBox>
      </header>

      <MainInner>
        <InfoBox>
          <div className='imgOutline'>
            <div className='myImg'></div>
          </div>
          <div className='myInt'>
            <h1 className='postion'>Full-Stack Developer</h1>
            <h1 className='level'>Rookie</h1>
            <h2>with great potential</h2>
            <p className='name'>천지민</p>
            <p className='birthday'>🧁1996. 08. 30</p>
            <div className='target'>
              <p>
                <Typewriter 
                  words={["'만약'을 생각하는 개발자", "결과보단 과정에 더 집중하는 개발자"]}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
          </div>
        </InfoBox>
        <nav>
          <Tab>
            <ul>
              <li 
                className='button mainpage' 
                onClick={(e) => {
                  navigate('/')
                  handleBtnEffect(e)
                }}>History
              </li>
              <li 
                className='button' 
                onClick={(e) => {
                  navigate('/skills')
                  handleBtnEffect(e)
                }}>Skills
              </li>
              <li 
                className='button' 
                onClick={(e) => {
                  navigate('/project')
                  handleBtnEffect(e)
                }}>Project
              </li>
              <li 
                className='button' 
                onClick={(e) => {
                  navigate('/practice')
                  handleBtnEffect(e)
                }}>Practice
              </li>
            </ul>
          </Tab>
        </nav>
      </MainInner>
    </>
  );
}

export default Header;