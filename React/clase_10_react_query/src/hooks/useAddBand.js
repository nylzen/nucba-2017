// import axios from 'axios';
// import { useMutation } from 'react-query';

// const addBand = band => {
//     return axios.post('http://localhost:3006/bandas', band)
// }

// export const useAddBand = ()=> {
//     return useMutation(addBand)
// }

// QueryInvalidation
// import axios from 'axios';
// import { useMutation, useQueryClient } from 'react-query';

// const addBand = band => {
//   return axios.post('http://localhost:3006/bandas', band);
// };

// export const useAddBand = () => {
//   const queryClient = useQueryClient();

//   return useMutation(addBand, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('bands');
//     },
//   });
// };

// handlingMutation
// import axios from 'axios';
// import { useMutation, useQueryClient } from 'react-query';

// const addBand = band => {
//   return axios.post('http://localhost:3006/bandas', band);
// };

// export const useAddBand = () => {
//   const queryClient = useQueryClient();

//   return useMutation(addBand, {
//     onSuccess: data => {
//       queryClient.setQueryData('bands', oldQueryData => {
//         return {
//           ...oldQueryData,
//           data: [...oldQueryData.data, data.data],
//         };
//       });
//     },
//   });
// };

//optimistic updates
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const addBand = band => {
  return axios.post('http://localhost:3006/bandas', band);
};

export const useAddBand = () => {
  const queryClient = useQueryClient();

  return useMutation(addBand, {
    onMutate: async newBand => {
      await queryClient.cancelQueries('bands');
      const previousBandsData = queryClient.getQueryData('bands');
      queryClient.setQueryData('bands', oldQueryData => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, { ...newBand }],
        };
      });

      return { previousBandsData };
    },

    onError: (_err, _newBand, context) => {
      queryClient.setQueryData('bands', context.previousBandsData);
    },

    onSettled: () => {
      queryClient.invalidateQueries('bands');
    },
  });
};
