import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { styled } from 'styled-components';

const GitField = styled.div`
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: center;
`;

function Practice() {
  return (
    <GitField>
      <GitHubCalendar 
        username='zziimm'
        hideTotalCount='true'
        hideColorLegend='true'
      />
    </GitField>
  );
}

export default Practice;