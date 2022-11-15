import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
