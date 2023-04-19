import React, { createContext, useState, useContext, ReactNode } from 'react';

export type GovrnModals = {
  addAttestationFormModal: boolean;
  attestationModal: boolean;
  bulkAttestationModal: boolean;
  bulkDaoAttributeModal: boolean;
  createDaoModal: boolean;
  csvImportModal: boolean;
  editContributionFormModal: boolean;
  guildImportModal: boolean;
  importGuildModal: boolean;
  mintModal: boolean;
  reportingFormModal: boolean;
  storybookModal: boolean;
};

const defaults: GovrnModals = {
  addAttestationFormModal: false,
  attestationModal: false,
  bulkAttestationModal: false,
  bulkDaoAttributeModal: false,
  createDaoModal: false,
  csvImportModal: false,
  editContributionFormModal: false,
  guildImportModal: false,
  importGuildModal: false,
  mintModal: false,
  reportingFormModal: false,
  storybookModal: false,
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
