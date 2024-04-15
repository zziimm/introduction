import React from 'react';
import { styled } from 'styled-components';
import MongModalSlide from '../slide/MongModalSlide';
import { FaGithub  } from "react-icons/fa6";

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 50px 50px;
  
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
    padding: 3px 4px;
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
    margin-top: 10px;
  }
  .summaryInfo span {
    line-height: 1.2rem;
    margin-top: 10px;
  }
  .summaryInfo span {
    display: inline-block;
  }


  
`;



function goniModal({ handleCloseMadal }) {
  return (
    <ModalBg>
      <ModalBox>
        <div className='headerBox'>
          <p className='closeBtn' onClick={() => handleCloseMadal()}>❌</p>
          <h1>My Mong</h1>
          <p>🐶애견 맞춤 정보와 커뮤니티 및 상품 제공 웹서비스</p>
        </div>
        <div className='detailBox'>
          <div className='imgBox'>
            <MongModalSlide />
          </div>
          <div className='textBox'>
            <p>
              <span className='toolTextIcon'>🧰:</span>
              <span className='toolText'>React</span>
              <span className='toolText'>Rudex</span>
              <span className='toolText'>Aioxs</span>
              <span className='toolText'>EJS</span>
              <span className='toolText'>styled-components</span>
              <span className='toolText'>react-router-dom</span>
              <span className='toolText be'>MongoDB</span>
              <span className='toolText be'>Node.js</span>
              <span className='toolText be'>Express</span>
              <span className='toolText be'>Passport</span>
              <span className='toolText be'>Socket.io</span>
              <span className='toolText be'>AWS S3</span>
            </p>
            <a href='https://github.com/zziimm/finalProject' target='_blank' rel='noreferrer noopener' className='toolText git'><FaGithub /> Github FE</a>
            <a href='https://github.com/zziimm/finalProjectServer' target='_blank' rel='noreferrer noopener' className='toolText git'><FaGithub /> Github BE</a>
            <p className='summaryHeader'>📋Summary</p>
            <div className='summaryTextBox'>
              <p>· BackEnd 팀장으로 진행</p>
              <p>· 팀원 구성: FrontEnd 4, BackEnd 2</p>
              <p className='summaryInfo'>
                <span>· 반려견에 대한 맞춤형 정보를 제공하고 공유하며, 자사 제품을 직접 홍보/판매하기 위해 개발되었습니다.</span>
                <span>· 회원은 가입 시 입력한 반려견의 몸무게, 나이 등을 기반으로 커뮤니티의 관련글과 반려견 조건 맞는 상품을 추천을 수 있습니다.</span>
                <span>· kakakoMap api를 사용한 지도로 주변 산책로를 검색할 수 있습니다.</span>
                <span>· Socket.io로 실시간 채팅 1:1이 가능하고 확인하지 않은 채팅에 대한 알림 기능이 있습니다.</span>
                <span>· 상품 목록은 8개씩 확인 가능하고 BE MongoDB 연산자를 이용해서 필요한 데이터만 전달할 수 있게 pipeline을 설계했습니다.</span>
              </p>
            </div>
          </div>
        </div>
      </ModalBox>
    </ModalBg>
  );
}

export default goniModal;