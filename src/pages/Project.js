import React from 'react';
import { styled } from 'styled-components';

const Inner = styled.div`
  h1 {
    text-align: center;
  }
`;

function Project(props) {
  return (
    <Inner className='mainInner'>
      <h1>Made it</h1>
    </Inner>
  );
}

export default Project;