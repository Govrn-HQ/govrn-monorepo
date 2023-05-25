import React from 'react';
import ReportShell from '../components/ReportShell';
import { RequireAuth } from '../utils/requireAuth';

const Report = () => {
  return (
    <RequireAuth>
      <ReportShell />
    </RequireAuth>
  );
};

export default Report;
