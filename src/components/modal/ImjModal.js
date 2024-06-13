import React from 'react';
import { styled } from 'styled-components';
import { FaGithub } from "react-icons/fa6";
import { TbHomeSearch } from "react-icons/tb";
import ImjModalSlide from '../slide/ImjModalSlide';


const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: gray;
  background-color: rgba(0, 0, 0, 0.7);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const ModalBox = styled.div`
  width: 90rem;
  height: 45rem;
  background-color: white;
  border-radius: 30px;
  padding: 50px 150px;
  
  .headerBox {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
  }
  .headerBox .closeBtn {
    position: absolute;
    right: 0;
    font-size: 40px;
    cursor: pointer;
    transition: 1s;
    &:hover {
      transform: rotate(360deg);
      transition: 1s;
    }
  }

  .headerBox p {
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
  }

  .detailBox {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .textBox .toolTextIcon {
    font-size: 20px;
  }

  .toolText.be {
    background: #bcbcbc69;
  }
  .textBox .toolText {
    display: inline-block;
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 3px 3px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  
  .git {
    text-decoration: none;
    margin-top: 10px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: gray;
      transition: 0.3s;
    }
  }
  .visit {
    text-decoration: none;
    margin-top: 10px;
    background: #357ef2;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #76a7f5;
      transition: 0.3s;
    }
  }

  .summaryHeader {
    margin: 10px 0 20px 0 ;
  }
  .summaryTextBox {
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    padding-left: 10px;
    font-size: 1.1rem;
  }
  .summaryTextBox p + p {
    margin-top: 5px;
  }
  .summaryInfo span {
    line-height: 1.2rem;
    margin-top: 10px;
  }
  .summaryInfo span {
    display: inline-block;
  }


  
`;



function imjModal({ handleCloseMadal }) {
  return (
    <ModalBg>
      <ModalBox>
        <div className='headerBox'>
          <p className='closeBtn' onClick={() => handleCloseMadal()}>❌</p>
          <h1>IMJ</h1>
          <p>📋여행 플래너</p>
        </div>
        <div className='detailBox'>
          <div className='imgBox'>
            <ImjModalSlide />
          </div>
          <div className='textBox'>
            <p>
              <span className='toolTextIcon'>🧰:</span>
              <span className='toolText'>React</span>
              <span className='toolText'>Rudex</span>
              <span className='toolText'>styled-components</span>
              <span className='toolText'>react-router-dom</span>
              <span className='toolText be'>firebase</span>
            </p>
            <a href='https://sage-faloodeh-cf962e.netlify.app/' target='_blank' rel='noreferrer noopener' className='toolText visit'><TbHomeSearch /> Visit</a>
            <a href='https://github.com/zziimm/triPlaner.git' target='_blank' rel='noreferrer noopener' className='toolText git'><FaGithub /> Github</a>
            <p className='summaryHeader'>📋Summary</p>
            <div className='summaryTextBox'>
              <p>· solo project </p>
              <p className='summaryInfo'>
                <span>· 여행중 모바일을 통한 접근이 많을 것을 고려하여 모바일 환경에서 사용하기 편하게 제작하였습니다.</span>
                <span>· firebase-Authentication를 통해 회원을 식별하고 프라이빗하게 일정을 기록할 수 있습니다.</span>
                <span>· DB 스키마를 만들어 데이터간 맺어진 관계를 기반으로 필요한 데이터를 받아올 수 있습니다.</span>
                <span>· 토큰 수명이 1시간이기 때문에 지정시간이 지나 토큰이 만료된 상황을 고려해 토큰이 없다면 로그인페이지로 유도합니다.</span>
                <span>· 임의의 id값으로 DB에 저장되어서 데이터를 불러올 때 원하는 순서로 오지 않던 문제가 있었는데 데이터를 불러와서 날짜나 지정된 순번에 맞게 소팅되는 함수를 적용하여 해결했습니다.</span>
              </p>
            </div>
          </div>
        </div>
      </ModalBox>
    </ModalBg>
  );
}

export default imjModal;