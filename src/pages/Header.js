import React from 'react';
import { styled } from 'styled-components';


const MainTitleBox = styled.div`
  height: 3rem;
  border-bottom: 1px solid gray;
  font-family: "Teko", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 130px;
  
  @media screen and (max-width: 768px) {
    padding: 10px 30px;
    
  }

`;

const TitleLogo = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;
const SubIcon = styled.div`
  font-weight: 700;
  font-size: 2rem;
`


function Header() {
  return (
    <>
      <header>
        <MainTitleBox>
          <TitleLogo>JStorming</TitleLogo>
          <SubIcon>Menu</SubIcon>
        </MainTitleBox>
      </header>

    </>
  );
}

export default Header;