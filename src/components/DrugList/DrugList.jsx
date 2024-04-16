import { useEffect, useState } from 'react';

import { allDrugs } from 'services/drugsAPI';

const DrugList = () => {
  const [drugsItem, setDrugsItem] = useState([]);

  useEffect(() => {
    allDrugs;
  });
};

export default DrugList;
