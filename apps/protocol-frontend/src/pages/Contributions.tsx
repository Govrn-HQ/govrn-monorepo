import React from 'react';
import styled from '@emotion/styled';
import ContributionsTable from '../components/ContributionsTable';
import SiteLayout from '../components/SiteLayout';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contributions = () => {
  return (
    <SiteLayout>
      <ContributionsTable />
    </SiteLayout>
  );
};

export default Contributions;
