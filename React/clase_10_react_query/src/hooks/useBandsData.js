import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBands = () => {
  return axios.get('http://localhost:3006/bandas');
};

export const useBandsData = () => {
  return useQuery('bands', fetchBands, {
    staleTime: 3000,
    cacheTime: 5000,
  });
};

//* ESTE ES EL USEQUERY QUE ESTABAMOS USANDO EN PAGES/BANDS.JS
// const { isLoading, data, isError, error } = useQuery('bands', fetchBands, {
//   cacheTime: 5000,
// Para el useQuery onClick
// enabled: false,
// onSuccess: data => console.log('Petición exitosa 😎', data),
// onError: error => console.log('Ocurrió un error 😥', error),
// retry: 3,
// retryDelay: 3000,
// select: data => {
//   const newBands = data.data.map(band => ({ ...band, genre: 'Cumbia' }));
//   return { ...data, data: newBands };
// },
//   staleTime: 3000,
// });
