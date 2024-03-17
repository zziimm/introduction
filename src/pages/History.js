import React from 'react';
import { styled } from 'styled-components';

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  .career {
    width: 450px;
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
    width: 800px;
    /* flex-grow: 0.7; */
    margin: 0 0 10px 20px;


    .strong {
      font-family: "Gowun Batang", serif;
      font-weight: 700;
      font-style: normal;
    }
    h1 {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }

    h2 {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    p {
      text-indent: 18px;
      justify-content: center;
      font-family: "Gowun Batang", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      padding: 10px ;
      line-height: 25px;
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
        <h2 className='strong'>" 가장 빠른 무역루트, IT를 개척하는 개발자 "</h2>
        <p>해상무역의 컨테이너선은 물질적인 풍요를 이루게 해줍니다. IT란 무역루트가 열린 이제, 저는 하나의 컨테이너선이 되어 지식의 풍요를 공유할 수 있는 <strong className='strong'>Full-Stack 개발자</strong>가 되는 꿈을 실현하고자 합니다.</p>
        <p>정공법을 좋아하고 기본을 충실하게 해서 대비하며 준비하는 성격덕분에 <strong className='strong'>'if'</strong>는 멀리할 수 없는 요소였고, <strong className='strong'>Javascript</strong>는 머릿속의 생각을 그려낼 수 있는 또 다른 '언어'였습니다.</p>
        <p><strong className='strong'>Redux Store</strong>를 사용하면서 데이터의 작은 흐름을 이해하고 <strong className='strong'>Node.js</strong>와 <strong className='strong'>Express</strong>로 서버를 구축하고 <strong className='strong'>MongoDB</strong>와 연동하면서 <strong className='strong'>RESTful API</strong>를 작성하며 전체적인 흐름을 알게 되었습니다.</p>
        <p><strong className='strong'>Socket.io</strong>로 실시간 채팅을 구현하며 데이터의 효율적인 사용을 위해 <strong className='strong'>DB 스키마</strong>를 작성하고 코드화한 경험이 있습니다. 서로 지속적으로 소통하며 완성되는 프로그램처럼 <strong className='strong'>소통하며 완전해지기 위해 노력하는 개발자</strong>입니다.</p>
      </div>
    </Inner>
  );
}

export default History;