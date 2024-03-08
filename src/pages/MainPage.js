import { styled } from 'styled-components';
import History from '../components/History';

const MainInner = styled.div`
  width: 768px;
  /* height: 340px; */
  margin: 0 auto;
  padding-top: 90px;
  /* background: black; */

  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
`;



function MainPage(props) {


  return (
    <MainInner>
      <History />
      {/* <InfoBox>
        <div className='imgOutline'><div className='myImg'></div></div>
        <div className='myInt'>
          <h1 className='postion'>Full-Stack Developer</h1>
          <h1 className='level'>Rookie</h1>
          <h2>with great potential</h2>
          <p className='name'>천지민</p>
          <p className='birthday'>🧁1996. 08. 30</p>
          <div>
            <p>'만약'을 생각하는 개발자</p>
            <p>이해하며 흡수하는 개발자</p>
          </div>
        </div>
      </InfoBox>
      <Tab>
        <ul>
          <li>History</li>
          <li onClick={() => navigate('/skills')}>Skills</li>
          <li>Project</li>
          <li>Pactice</li>
        </ul>
      </Tab> */}
    </MainInner>
  );
}

export default MainPage;