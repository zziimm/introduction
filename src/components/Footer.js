import React from 'react';
import { styled } from 'styled-components';

const FooterBox = styled.div`
  margin-top: 100px;
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 10px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterBox>
      <p>copyright © JiMin All Rights Reserved.</p>
    </FooterBox>
  );
}

export default Footer;