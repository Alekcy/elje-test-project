import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
`;

function getImageSource() {
  return window.innerWidth > window.innerHeight
    ? 'https://static.aviapark.com/files/155333/960x576_1.png'
    : 'https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png';
}

function App() {

  return (
    <Container>
      <Image src={getImageSource()} />
    </Container>
  );
}

export default App;
