import React, { createContext, useState, useEffect } from 'react';

import { allDrugs } from 'services/drugsAPI';

const DrugContext = createContext({
  drugsItem: [],
  filteredDrug: null,
  selectedPharmacy: null,
  setSelectedPharmacy: () => {},
});

export const DrugProvider = ({ children }) => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [drugsItem, setDrugsItem] = useState([]);

  useEffect(() => {
    const fetchAllDrugs = async () => {
      try {
        const data = await allDrugs();
        setDrugsItem(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchAllDrugs();
  }, []);

  const filteredDrug = drugsItem =>
    drugsItem.find(({ _id }) => {
      return _id === selectedPharmacy;
    });

  return (
    <DrugContext.Provider
      value={{ filteredDrug, selectedPharmacy, setSelectedPharmacy, drugsItem }}
    >
      {children}
    </DrugContext.Provider>
  );
};

export default DrugContext;
