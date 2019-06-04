import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`

const App = () => {
  return (
    <AppContainer>
      <TopBar />
      <Header />
      <Content />
    </AppContainer>
  );
}

export default App;
