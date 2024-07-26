import { useContext } from 'react';

import OrderForm from 'components/OrderForm/OrderForm';
import DrugOnMap from 'components/DrugOnMap/DrugOnMap';
import DrugContext from 'contexts/DrugContext';

import css from './OrderDrugForm.module.css';

const OrderDrugForm = () => {
  const { filteredDrug, drugsItem } = useContext(DrugContext);

  return (
    <div className={css.formWrapper}>
      <div className={css.mapWrapper}>
        <DrugOnMap currentDrug={filteredDrug(drugsItem)} />
      </div>
      <OrderForm />
    </div>
  );
};

export default OrderDrugForm;
