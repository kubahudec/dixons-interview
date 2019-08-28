import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: 3px;
  padding: 20px 40px;
  background: #F2F2F2;
  max-width: 640px;
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ContentWrapper>
        <h1>react-base based on:</h1>
        <ul>
          <li>create-react-app</li>
          <li>styled-components</li>
          <li>testing-library</li>
        </ul>
      </ContentWrapper>
    </AppWrapper>
  )
}

export default App;
