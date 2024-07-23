import OrderForm from 'components/OrderForm/OrderForm';
import DrugOnMap from 'components/DrugOnMap/DrugOnMap';

import css from './OrderDrugForm.module.css';

const OrderDrugForm = () => {
  return (
    <>
      <DrugOnMap />
      <OrderForm />
    </>
  );
};

export default OrderDrugForm;
