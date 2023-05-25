import React from 'react';
import AttestationsTableShell from '../components/AttestationsTableShell';
import { RequireAuth } from '../utils/requireAuth';

// Force
const Attestations = () => {
  return (
    <RequireAuth>
      <AttestationsTableShell />
    </RequireAuth>
  );
};

export default Attestations;
