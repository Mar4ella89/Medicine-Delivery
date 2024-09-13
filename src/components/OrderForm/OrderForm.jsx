import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

import css from './OrderForm.module.css';

const deliveryMethod1 = [
  'Pick up from store',
  'Delivery to address',
  'New Post',
];

const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup
    .string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(15, 'Phone number must not exceed 15 characters')
    .matches(
      /^\+?\d+$/,
      'Phone number must contain only digits and may start with "+"'
    )
    .required('Phone number is required'),
  deliveryMethod: yup
    .string()
    .oneOf(deliveryMethod1, 'Please select a valid delivery method')
    .required('Delivery method is required. Please enter your delivery method'),
  address: yup.string().required('Address is required'),
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
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Last Name</span>
            <Field
              className={css.field}
              name="lastName"
              maxLength="30"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Email</span>
            <Field
              className={css.field}
              name="email"
              maxLength="50"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            <span className={css.fieldName}>Phone</span>
            <Field
              className={css.field}
              name="phone"
              maxLength="15"
              type="text"
              placeholder="Phone"
            />
            <ErrorMessage name="phone" component="div" className={css.error} />
          </label>
          <div>
            <h3>Choose delivery method</h3>

            <div className={css.radio}>
              {deliveryMethod1.map(method => {
                return (
                  <label key={method} className={css.radioLabel}>
                    <span className={css.radioName}>{method}</span>
                    <Field
                      className={css.field}
                      type="radio"
                      name="deliveryMethod"
                      value={method}
                    />
                  </label>
                );
              })}
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
            <ErrorMessage
              name="address"
              component="div"
              className={css.error}
            />
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
