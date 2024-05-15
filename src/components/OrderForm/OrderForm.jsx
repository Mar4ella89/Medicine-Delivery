import { Formik, Form, Field } from 'formik';
import css from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <section>
      <Formik
        initialValues={{ name: '', email: '', phone: '', address: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field className={css.field} name="name" type="text" />
          <Field className={css.field} name="email" type="email" />
          <Field className={css.field} name="phone" type="text" />
          <Field className={css.field} name="address" type="email" />
          <button className={css.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default OrderForm;
