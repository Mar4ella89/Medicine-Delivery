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
    <section className={css.section}>
      <Formik
        initialValues={{ name: '', email: '', phone: '', address: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label className={css.lable}>
            <span className={css.fieldName}>Name</span>
            <Field
              className={css.field}
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.lable}>
            <span className={css.fieldName}>Email</span>
            <Field
              className={css.field}
              name="email"
              type="text"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={css.lable}>
            <span className={css.fieldName}>Phone</span>
            <Field
              className={css.field}
              name="phone"
              type="text"
              placeholder="Phone"
            />
            <ErrorMessage name="phone" component="div" />
          </label>
          <label className={css.lable}>
            <span className={css.fieldName}>Address</span>
            <Field
              className={css.field}
              name="address"
              type="text"
              placeholder="Address"
            />
            <ErrorMessage name="address" component="div" />
          </label>

          <button className={css.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default OrderForm;
