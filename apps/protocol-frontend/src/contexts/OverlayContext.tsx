import React, { createContext, useState, useContext, ReactNode } from 'react';

export type GovrnModals = {
  bulkAttestationModal: boolean;
  attestationModal: boolean;
  bulkDaoAttributeModal: boolean;
  mintModal: boolean;
  editContributionFormModal: boolean;
  addAttestationFormModal: boolean;
  storybookModal: boolean;
  reportingFormModal: boolean;
  createDaoModal: boolean;
  guildImportModal: boolean;
  csvImportModal: boolean;
  verifiedCelebrationModal: boolean;
  bulkVerifiedCelebrationModal: boolean;
};
const defaults: GovrnModals = {
  addAttestationFormModal: false,
  attestationModal: false,
  bulkAttestationModal: false,
  bulkDaoAttributeModal: false,
  editContributionFormModal: false,
  mintModal: false,
  reportingFormModal: false,
  storybookModal: false,
  createDaoModal: false,
  guildImportModal: false,
  csvImportModal: false,
  verifiedCelebrationModal: false,
  bulkVerifiedCelebrationModal: false,
};

export type OverlayContextType = {
  modals: GovrnModals;
  setModals: (modals: Partial<GovrnModals>) => void;
};

export const OverlayContext = createContext({} as OverlayContextType);

interface OverlayProviderProps {
  children?: ReactNode | undefined;
}

export const OverlayContextProvider: React.FC<OverlayProviderProps> = ({
  children,
}: OverlayProviderProps) => {
  const [modals, setModals] = useState(defaults);
  const showModal = (modals: Partial<GovrnModals>) => {
    // This allows to show only one modal at a time.
    // In addition, this reset any true value for other modals.
    setModals({ ...defaults, ...modals });
  };

  return (
    <OverlayContext.Provider
      value={{
        modals,
        setModals: showModal,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = (): OverlayContextType => useContext(OverlayContext);
