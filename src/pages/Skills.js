import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as JSIcon } from "../images/JSIcon.svg";
import { ReactComponent as AwsIcon } from "../images/awsIcon.svg";
import { ReactComponent as GitIcon } from "../images/gitIcon.svg";
import { ReactComponent as NodeIcon } from "../images/nodeIcon.svg";
import { ReactComponent as ReactIcon } from "../images/reactIcon.svg";
import { ReactComponent as ReduxIcon } from "../images/reduxIcon.svg";
import { ReactComponent as ExpressIcon } from "../images/expressIcon.svg";
import { ReactComponent as MongodbIcon } from "../images/mongodb.svg";
import { ReactComponent as SocketioIcon } from "../images/socketio_logo_icon.svg";

const Inner = styled.div`
  display: flex;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
`;

const SkillBox = styled.div`
  width: 550px;
  svg {
    cursor: pointer;
    border-radius: 20px;
  }
  svg:hover {
    transform: scale(1.1);
    border: 2px dotted gray;
    border-radius: 20px;
    /* transition: 1s; */
  }
  svg:focus {
    transform: scale(1.1);
    border: 2px dotted orange;
    border-radius: 20px;
    /* transition: 1s; */
  }
  div + div {
    padding-top: 20px;
  }
  div > svg + svg {
    margin-left: 20px;
  }
`;

const TextBox = styled.div`
  width: 650px;
  margin-left: 30px;
  p {
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.3rem;
    padding-top: 20px;
    line-height: 1.8rem;
  }
`;

const detailText = {
  JS: ['· jQuery를 사용하지 않고 문법을 사용할 수 있습니다.', '· 반복문과 조건문을 통해 list를 작성하거나 유효성 검사를 할 수 있습니다.', '· 함수 표현식과 함수 선언문의 차이를 알고 호이스팅을 이해하고 있습니다.', '· 객체나 배열에서 필요한 값을 추출하기 위한 메서드를 알고 있습니다.', '· Promise를 이해하고 있으며 async / await를 통해 비동기 함수를 처리 할 수 있습니다. '],
  React: ['· axios를 사용해 서버에게 API 호출을 할 수 있습니다. ','· Component를 나누고 연결할 수 있으며 props의 흐름을 이해하고 있습니다.', '· react-router-dom을 사용해서 렌더링할 페이지를 나누고 URL 파라미터와 쿼리스트링을 이해하고 있습니다.', '· styled-components를 사용해서 컴포넌트 스타일링이 가능합니다.'],
  Redux: ['· Redux Store를 통해 전역 상태 관리를 할 수 있습니다.','· useDispatch와 useSelector를 이해하고 데이터를 이동시킬 수 있습니다.', '· thunk와 extraReducers를 이용해서 비동기 작업을 할 수 있으며 로딩 상태를 관리 할 수 있습니다.', '· Redux의 보일러 플레이트가 없어진 Redux Toolkit을 사용할 수 있습니다.'],
  MongoDB: ['· NoSQL을 이해하고 MongoDB Atlas를 사용 할 수 있습니다.', '· MongoDB의 연산자를 사용하여 데이터를 업데이트 할 수 있습니다.', '· search index를 이용해 데이터를 효율적으로 찾을 수 있고 aggregate 메서드를 사용해서 pipeline을 구축할 수 있습니다.', '· 데이터를 보다 효율적으로 사용하고 더 나은 UX를 만들기 위해 데이터들의 관계를 꾸준하게 생각하고 있습니다.'],
  NodeJs: ['· Node.js의 장점인 싱글 스레드, non-blocking I/O를 이해하고 React와 연동해서 MVC패턴을 구축할 수 있습니다.', '· Swagger를 통해서 REST API를 설계한 경험이 있고 CRUD 처리를 할 수 있습니다.', '· try-catch문으로 예외처리을 하여 서버가 지속적으로 운영될 수 있도록 할 수 있습니다.', '· ejs문법을 사용할 수 있습니다.'],
  Express: ['· app.use()로 필요한 미들웨어를 작성하고 라우터를 분리할 수 있으며, res 메서드로 응답할 수 있습니다.', '· 에러 처리 미들웨어 작성을 통해 예치기 못하거나 특정 상황에 대비할 수 있습니다.', '· express-session으로 세션을 관리할 수 있고 passport로 세션에 저장하고 정보를 불러와서 로그인을 유지할 수 있습니다.'],
  Git: ['· github를 사용하며 GUI툴뿐만 아니라 CLI 명령어도 사용 가능합니다.', '· 팀프로젝트에서 git flow 전략을 사용해 버전을 관리한 경험이 있습니다.'],
  AWS: ['· multer와 multer-s3, aws-sdk/client-s3를 이용해 AWS S3에 이미지를 업로드하고 이미지 URL을 MongoDB에 저장하는 미들웨어를 사용할 수 있습니다.', '· Lightsail을 통해 서버를 배포한 경험이 있으며 EC2도 익히기 위한 학습을 진행 중입니다.'],
  Socket: ['· room 메서드를 이용해 유저간 1:1 실시간 채팅 기능을 구현한 경험이 있습니다.', '· 실시간 데이터 통신을 활용해서 실시간 알림과 확인한 채팅, 확인하지 않은 채팅방의 UI를 다르게 보이게 할 수 있습니다.'],
}

function Skills() {
  const [subTitle, setSubTitle] = useState('Node.js')
  const [detail, setDetail] = useState(detailText.NodeJs)
  function handleIcons(icon) {
    switch (icon) {
      case 'JS':
        setSubTitle('Javascript');
        setDetail(detailText.JS);
        // function next() {
        //   let copyDetail = [...detail]
        //   copyDetail = [`${process.env.REACT_APP_JS}`]
        //   setDetail(copyDetail);
        // };
        // next();
        break;
        
        case 'React':
          setSubTitle('React');
          setDetail(detailText.React);
          break;
          
      case 'Redux':
        setSubTitle('Redux');
        setDetail(detailText.Redux);
        break;
        
      case 'MongoDB':
        setSubTitle('MongoDB');
        setDetail(detailText.MongoDB);
      break;
          
      case 'Node.js':
        setSubTitle('Node.js');
        setDetail(detailText.NodeJs);
        break;
      
      case 'Express':
        setSubTitle('Express');
        setDetail(detailText.Express);
        break;
        
      case 'Git':
        setSubTitle('Git');
        setDetail(detailText.Git);
      break;
        
      case 'AWS':
        setSubTitle('AWS S3');
        setDetail(detailText.AWS);
      break;
          
      case 'Socket.io':
        setSubTitle('Socket.io');
        setDetail(detailText.Socket);
      break;

      default:
        break;
    }
  }

  return (
    <Inner className='mainInner'>
      <SkillBox>
        <h1>Stack</h1>
        <div>
          <JSIcon onClick={() => handleIcons('JS')}/>
          <ReactIcon style={{marginLeft: '25px'}} onClick={() => handleIcons('React')}/>
          <ReduxIcon style={{marginLeft: '25px'}} onClick={() => handleIcons('Redux')}/>
        </div>
        <div>
          <MongodbIcon onClick={() => handleIcons('MongoDB')}/>
          <NodeIcon style={{marginLeft: '25px'}} onClick={() => handleIcons('Node.js')}/>
          <ExpressIcon style={{marginLeft: '25px'}} onClick={() => handleIcons('Express')}/>
        </div>
        <div>
          <GitIcon onClick={() => handleIcons('Git')}/>
          <AwsIcon onClick={() => handleIcons('AWS')}/>
          <SocketioIcon  style={{marginLeft: '30px'}} onClick={() => handleIcons('Socket.io')}/>
        </div>
      </SkillBox>
      <TextBox>
        <h1>{subTitle}</h1>
        {detail.map((text) => {
          return <p>{text}</p>
        })}
      </TextBox>
      

    </Inner>
  );
}

export default Skills;