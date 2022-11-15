import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools());

// store.subscribe(() => console.log('Cambio el estado'));

export default store;
