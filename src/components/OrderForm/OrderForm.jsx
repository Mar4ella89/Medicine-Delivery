import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

import css from './OrderForm.module.css';

const deliveryMethod1 = [
  'Pick up from store',
  'Delivery to address',
  'New Post',
];

const userSchema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  // phone: yup.string().min(6).max(32).required(),
  deliveryMethod: yup
    .string()
    .oneOf(deliveryMethod1)
    .required('Please enter your delivery method'),
  // address: yup.string().oneOf(age).required('Please enter your age'),
});

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  deliveryMethod: null,
  address: '',
};

const OrderForm = () => {
  return (
    <section className={css.section}>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label className={css.label}>
            <span className={css.fieldName}>Name</span>
            <Field
              className={css.field}
              name="name"
              maxLength="20"
              type="text"
              placeholder="Name"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Last Name</span>
            <Field
              className={css.field}
              name="lastName"
              maxLength="30"
              type="text"
              placeholder="Last Name"
              required
            />
            <ErrorMessage name="lastName" component="div" />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Email</span>
            <Field
              className={css.field}
              name="email"
              maxLength="50"
              type="text"
              placeholder="Email"
              required
            />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Phone</span>
            <Field
              className={css.field}
              name="phone"
              type="text"
              placeholder="Phone"
              required
            />
            <ErrorMessage name="phone" component="div" />
          </label>
          <div>
            <h3>Choose delivery method</h3>
            <div className={css.radio}>
              <label className={css.label}>
                <span className={css.fieldName}>Pick up from store</span>
                <Field
                  className={css.field}
                  type="radio"
                  name="deliveryMethod"
                  value="Pick up from store"
                />
              </label>
              <label className={css.label}>
                <span className={css.fieldName}>Delivery to address</span>
                <Field
                  className={css.field}
                  type="radio"
                  name="deliveryMethod"
                  value="Delivery to address"
                />
              </label>
              <label className={css.label}>
                <span className={css.fieldName}>New Post</span>
                <Field
                  className={css.field}
                  type="radio"
                  name="deliveryMethod"
                  value="New Post"
                />
              </label>
            </div>
          </div>
          <label className={css.label}>
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
