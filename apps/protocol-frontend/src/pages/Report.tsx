import React from 'react';
import ReportShell from '../components/ReportShell';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const Report = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <ReportShell />
      </RequireAuth>
    </SiteLayout>
  );
};

export default Report;
