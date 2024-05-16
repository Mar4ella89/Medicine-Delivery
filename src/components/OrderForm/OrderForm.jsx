import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

import css from './OrderForm.module.css';

const gender = ['female', 'male'];
const age = ['18-25', '26-35', '36+'];

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  // phone: yup.string().min(6).max(32).required(),
  // gender: yup.string().oneOf(gender).required('Please enter your gender'),
  // address: yup.string().oneOf(age).required('Please enter your age'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

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
