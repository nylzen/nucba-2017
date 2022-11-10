import React, { createContext, useContext, useReducer } from 'react';
import { counterInitialState, counterReducer } from '../reducers/countReducer';

const CountContext = createContext();

export const useCountContext = () => useContext(CountContext);

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const data = { state, dispatch };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export { CountContextProvider };
