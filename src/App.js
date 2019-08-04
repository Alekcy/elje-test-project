import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@material/react-linear-progress/dist/linear-progress.css';
import LinearProgress from '@material/react-linear-progress';
import CloseButton from './CloseButton';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    background-image: url(${props => props.imgSrc});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

const LinearProgressStyled = styled(LinearProgress)`
    position: absolute;
    bottom: 0;
`;


function getImageSource() {
  return window.innerWidth >= window.innerHeight
    ? 'https://static.aviapark.com/files/155333/960x576_1.png'
    : 'https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png';
}

function App() {

  const [progressBarVisible, setProgressBarVisibility] = useState(true);

  setTimeout(() => {
    setProgressBarVisibility(false);
  },3000);

  return (
    <Container imgSrc={getImageSource()}>
      {
        progressBarVisible
          ? <LinearProgressStyled indeterminate />
          : <CloseButton />
      }
    </Container>
  );
}

export default App;
