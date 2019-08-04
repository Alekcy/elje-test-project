import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
`;


function CloseButton() {
  return (
    <Container>
      <img src="/close.svg"></img>
    </Container>
  );
}

export default CloseButton;
