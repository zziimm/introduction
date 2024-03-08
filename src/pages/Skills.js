import React from 'react';
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
// import { ReactComponent as JSIcon } from "../images/javascript_icon.svg";

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkillBox = styled.div`

  p {
    margin-bottom: 10px;
  }
  div + div {
    padding-top: 20px;
  }
  div > svg+svg {
    margin-left: 20px;
  }
`;

const TextBox = styled.div`
  
`;

function Skills(props) {
  return (
    <Inner className='mainInner'>
      <SkillBox>
        <p>Stack</p>
        <div>
          <JSIcon />
          <ReactIcon />
          <ReduxIcon />
        </div>
        <div>
          <MongodbIcon />
          <NodeIcon />
          <ExpressIcon />
        </div>
        <div>
          <GitIcon />
          <AwsIcon />
          <SocketioIcon />
        </div>
      </SkillBox>
      <TextBox>
        <p>sub-title</p>
        <p>detail</p>
      </TextBox>
      

    </Inner>
  );
}

export default Skills;