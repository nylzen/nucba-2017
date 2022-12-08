import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { formInitialValues } from '../../formik/initialValues';
import { validationSchema } from '../../formik/validationsSchemas';
import Input from '../UI/Input/Input';
import Submit from '../UI/Submit/Submit';
import TextAreaInput from '../UI/TextAreaInput/TextAreaInput';

import { Form, FormBox, FormSubtitle, FormTitle } from './FormTurnStyles';

// const validate = values => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Campo requerido';
//   } else if (values.name.length > 5) {
//     errors.name = 'Te pasaste de 5';
//   }

//   if (!values.email) {
//     errors.email = 'campo requerido';
//   }

//   return errors;
// };

const phoneRegex = /\d{10}$/;

// const validationSchema = Yup.object({
//   name: Yup.string().trim().max(5, 'te pasaste').required('Campo requerido'),
//   surname: Yup.string().trim().required('Campo requerido'),
//   date: Yup.date().required('Campo Requerido'),
//   age: Yup.number()
//     .integer('Deber ser un numero entero')
//     .moreThan(16, 'Sos menor')
//     .lessThan(81, 'Descansá del trabajo')
//     .required('Campo Requerido'),
//   email: Yup.string().email('Correo inválido').required('Campo requerido'),
//   cellphone: Yup.string()
//     .matches(phoneRegex, 'Celular inválido')
//     .required('Campo requerido'),
//   comments: Yup.string().max(255, 'Máximo de 255 caracteres').notRequired(),
// });

const FormTurn = () => {
  // const { getFieldProps, handleSubmit, errors, touched } = useFormik({
  //   initialValues: {
  // name: '',
  // surname: '',
  // date: '',
  // age: '',
  // email: '',
  // cellphone: '',
  // comments: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log({ values });
  //     resetForm();
  //   },
  // });
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{' '}
        <b>NucWorking</b>
      </FormSubtitle>

      <Formik
        // initialValues={{
        //   name: '',
        //   surname: '',
        //   date: '',
        //   age: '',
        //   email: '',
        //   cellphone: '',
        //   comments: '',
        // }}
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              name='name'
              label='Nombre'
              type='text'
              isError={touched.name && errors.name}
            ></Input>
            <Input
              name='surname'
              label='Apellido'
              type='text'
              isError={touched.surname && errors.surname}
            ></Input>
            <Input
              name='date'
              label='Fecha'
              type='date'
              isError={touched.date && errors.date}
            ></Input>
            <Input
              name='age'
              label='Edad'
              type='number'
              isError={touched.age && errors.age}
            ></Input>
            <Input
              name='email'
              label='Correo Electronico'
              type='email'
              isError={touched.email && errors.email}
            ></Input>
            <Input
              name='cellphone'
              label='Telefono'
              type='tel'
              isError={touched.cellphone && errors.cellphone}
            ></Input>
            <TextAreaInput
              name='comments'
              label='¿Cómo escuchaste de nosotros?'
              isError={touched.comments && errors.comments}
            />
            <Submit />
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormTurn;
