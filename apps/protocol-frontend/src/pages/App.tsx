import React from 'react';
import styled from '@emotion/styled';
import SiteLayout from '../components/SiteLayout';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <SiteLayout>
      <h1>App</h1>
    </SiteLayout>
  );
};

export default App;
