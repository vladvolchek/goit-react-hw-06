import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import css from './ContactForm.module.css'

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const telId = useId();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = { ...values, id: nanoid() };
        onAddContact(newContact);
        resetForm();
      }}
    >
      <Form>
        <label className={css.nameInput} htmlFor={nameId}>
          Name
          <Field type="text" name="name" id={nameId}/>
        </label>
        <ErrorMessage name="name" component="div" />
        <label className={css.telInput} htmlFor={telId}>
          Number
          <Field type="text" name="number" id={telId}/>
        </label>
        <ErrorMessage name="number" component="div" />
        <button className={css.addBtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};