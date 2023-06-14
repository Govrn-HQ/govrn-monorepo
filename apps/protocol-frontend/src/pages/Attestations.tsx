import React from 'react';
import AttestationsTableShell from '../components/AttestationsTableShell';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const Attestations = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <AttestationsTableShell />
      </RequireAuth>
    </SiteLayout>
  );
};

export default Attestations;
