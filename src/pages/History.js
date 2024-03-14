import React from 'react';
import { styled } from 'styled-components';

const Inner = styled.div`
  display: flex;

  .career {
    /* flex-grow: 0.2; */
  }
  .career div + div {
    margin-top: 50px;
  }

  .career h1 {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }
  .career p {
    margin-top: 5px;
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
  }
  .career .date {
    padding-left: 25px;
  }

  .myStory {
    flex-grow: 1;
    margin: 0 0 10px 20px;

    h1 {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }

    h2 {
      display: flex;
      justify-content: center;
      font-family: "Gowun Batang", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1.5rem;
    }
    
    p {
      justify-content: center;
      font-family: "Gowun Batang", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 19px;
      padding: 20px 10px;
    }
  }
`;

function History() {
  return (
    <Inner className='mainInner'>
      <div className='career'>
        <div className='education'>
          <h1>Education</h1>
          <p>📚 풀스택(MERN Stack) 웹개발자 양성과정 수료</p>
          <p className='date'>- 2023.08 - 2024.01</p>
        </div>
        <div className='graduation'>
          <h1>Graduation</h1>
          <p>🎓 세명대학교 무역학과/회계학과</p>
          <p className='date'>- 2015.03 - 2021.02 졸업</p>
          <p>🎓 안산강서고등학교</p>
          <p className='date'>- 2012.03 - 2015.02 졸업</p>
        </div>
      </div>
      <div className='myStory'>
        <h1>Introduce</h1>
        <h2>" 가장 빠른 무역루트, IT를 개척하는 개발자 "</h2>
        <p>방대한 양의 실물을 </p>
      </div>
    </Inner>
  );
}

export default History;