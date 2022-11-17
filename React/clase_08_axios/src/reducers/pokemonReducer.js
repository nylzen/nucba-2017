import { initialPokemon } from '../data/initialPokemon';
import { ERROR, IS_FETCHING, SUCCESS } from '../types';

export const initialState = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        isLoading: true,
        data: null,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Pokemon no encontrado, buscá bien pa',
      };
    default:
      return state;
  }
};
