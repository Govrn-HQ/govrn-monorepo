import React from 'react';
import SiteLayout from '../components/SiteLayout';
import ContributionsTableShell from '../components/ContributionsTableShell';
import { RequireAuth } from '../utils/requireAuth';

const Contributions = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <ContributionsTableShell />
      </RequireAuth>
    </SiteLayout>
  );
};

export default Contributions;
