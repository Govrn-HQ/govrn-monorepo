import React, { createContext, useState, useContext } from 'react';

export const OverlayContext: any = createContext(null);

interface OverlayProviderProps {
  children: any;
}

export const OverlayContextProvider: React.FC<OverlayProviderProps> = ({
  children,
}: OverlayProviderProps) => {
  const [modals, setModals] = useState({
    reportingFormModal: false,
    editContributionFormModal: false,
    addAttestationFormModal: false,
    bulkAttestationModal: false,
    bulkDaoAttributeModal: false,
    mintModal: false,
    storybookModal: false,
  });

  return (
    <OverlayContext.Provider
      value={{
        modals,
        setModals,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayContextProvider;

export const useOverlay = () => {
  const { modals, setModals } = useContext(OverlayContext);
  return {
    modals,
    setModals,
  };
};
