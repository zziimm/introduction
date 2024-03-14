import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { styled } from 'styled-components';

const Inner = styled.div`
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const GitField = styled.div`
  display: flex;
  justify-content: center;
`;

function Practice() {
  return (
    <Inner>
      <h1>Garden</h1>
      <GitField>
        <GitHubCalendar 
          username='zziimm'
          hideTotalCount='true'
          hideColorLegend='true'
        />
      </GitField>
    </Inner>
  );
}

export default Practice;