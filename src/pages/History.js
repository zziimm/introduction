import React from 'react';
import { styled } from 'styled-components';

const Inner = styled.div`
  display: flex;
  .career div + div {
    margin-top: 50px;
  }

  .career h1 {
    margin-bottom: 10px;
  }
  .career p {
    margin-top: 5px;
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.9rem;
  }
  .career .date {
    padding-left: 25px;
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
      <div className='myStroy'>
        <h1>Introduce</h1>
        <h2>""</h2>
      </div>
    </Inner>
  );
}

export default History;