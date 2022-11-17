import axios from 'axios';
import { ERROR, IS_FETCHING } from '../types';

export const fetchPokemon = (e, pokemon) => async dispatch => {
  e.preventDefault();
  dispatch({ type: IS_FETCHING });

  try {
    let selectedPokemon = pokemon.toLowerCase().trim();
    const { data } = await axios.get(`
    https://pokeapi.co/api/v2/pokemon/${selectedPokemon}
    `);
    dispatch({ type: 'SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
