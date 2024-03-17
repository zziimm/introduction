import React from 'react';
import { styled } from 'styled-components';
import GoniModalSlide from '../slide/GoniModalSlide';

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
    padding: 3px 3px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  
  .git {
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
    margin-top: 5px;
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
          <h1>GoniMinton</h1>
          <p>🏸배드민턴 매칭 및 커뮤니티 웹서비스</p>
        </div>
        <div className='detailBox'>
          <div className='imgBox'>
            <GoniModalSlide />
          </div>
          <div className='textBox'>
            <p>
              <span className='toolTextIcon'>🧰:</span>
              <span className='toolText'>React</span>
              <span className='toolText'>Rudex</span>
              <span className='toolText'>Aioxs</span>
              <span className='toolText'>styled-components</span>
              <span className='toolText'>react-router-dom</span>
              <span className='toolText be'>MongoDB</span>
              <span className='toolText be'>Express</span>
              <span className='toolText be'>Passport</span>
            </p>
            <p className='toolText git'>Github</p>
            <p className='summaryHeader'>📋Summary</p>
            <div className='summaryTextBox'>
              <p>· 팀원 구성: 풀스택3, 디자이너1</p>
              <p className='summaryInfo'>
                <span>· 지역 내 배드민턴 활동을 활성화하기 위해 개발하게 되었습니다.</span>
                <span>경기를 등록해 신청을 받고 경기 후에는 승패여부를 기록 할 수 있으며,</span>
                <span>등록/신청 시 내일정에 일정이 바로 추가됩니다.</span>
                <span>소통을 위한 클럽 기능과 커뮤니티 기능을 지원합니다.</span>
              </p>
              <p className='summaryInfo'>
                <span>· 회원가입 시 비밀번호를 bcrypt로 암호화하여 지정된 양식에 맞는 회원정보를 입력받기 위해 유효성 검사를 진행합니다.</span>
                <span>· 지도는 NaverMap api를 사용하여 체육관을 확인할 수 있습니다.</span>
                <span>· FullCalendar 라이브러리에 google calendar api를 적용하였습니다.</span>
                <span>. FE에선 Redux Store, BE에서는 passport로 미들웨어를 설정해 회원을 식별합니다.</span>
              </p>
            </div>
          </div>
        </div>
      </ModalBox>
    </ModalBg>
  );
}

export default goniModal;