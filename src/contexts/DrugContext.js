import React, { createContext, useState } from 'react';

const DrugContext = createContext({
  filteredDrug: null,
  selectedPharmacy: () => {},
});

export const DrugProvider = ({ children }) => {
  //   const [filteredDrug, setFilteredDrug] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);

  const filteredDrug = drugsItem =>
    drugsItem.find(({ _id }) => {
      return _id === selectedPharmacy;
    });

  const selectedPharmacy = pharmacyId => setSelectedDrug(pharmacyId);

  return (
    <DrugContext.Provider value={{ filteredDrug, selectedPharmacy }}>
      {children}
    </DrugContext.Provider>
  );
};

export default DrugProvider;
