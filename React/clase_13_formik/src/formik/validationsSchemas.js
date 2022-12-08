import * as Yup from 'yup';

const phoneRegex = /\d{10}$/;

export const validationSchema = Yup.object({
  name: Yup.string().trim().max(5, 'te pasaste').required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido'),
  date: Yup.date().required('Campo Requerido'),
  age: Yup.number()
    .integer('Deber ser un numero entero')
    .moreThan(16, 'Sos menor')
    .lessThan(81, 'Descansá del trabajo')
    .required('Campo Requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, 'Celular inválido')
    .required('Campo requerido'),
  comments: Yup.string().max(255, 'Máximo de 255 caracteres').notRequired(),
});
