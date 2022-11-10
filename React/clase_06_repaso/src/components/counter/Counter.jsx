import React, { useReducer } from 'react';

// reducers
import {
  counterInitialState,
  counterReducer,
} from '../../reducers/countReducer';
// Types
import { TYPES } from '../../actionsTypes/countActions';

import {
  CounterButtonContainerStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from './CounterStyles';

import { Add } from '../add/Add';
import Substract from '../substract/Substract';
import Reset from '../reset/Reset';
import { useCountContext } from '../../context/CountContext';

const Counter = () => {
  // UseState
  /*  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  }; */

  // UseReducer
  //   const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const { state } = useCountContext();

  return (
    // <CounterContainerStyled>
    //   <CounterButtonContainerStyled>
    //     {/* Dividir */}
    //     <CounterButtonStyled left onClick={handleDivide}>
    //       <FiDivideCircle size='32px' color='white' />
    //     </CounterButtonStyled>

    //     {/* -5 */}
    //     <CounterButtonStyled onClick={handleDecrement_5}>
    //       <p>
    //         -<RiNumber5 size='32px' color='white' />
    //       </p>
    //     </CounterButtonStyled>
    //     {/* menos */}
    //     <CounterButtonStyled onClick={handleDecrement}>
    //       <AiOutlineMinusCircle size='32px' color='white' />
    //     </CounterButtonStyled>

    //     {/* Counter */}
    //     <CounterSpanStyled>{state.count}</CounterSpanStyled>

    //     {/* + */}
    //     <CounterButtonStyled onClick={handleIncrement}>
    //       <AiOutlinePlusCircle size='32px' color='white' />
    //     </CounterButtonStyled>
    //     {/* +5 */}
    //     <CounterButtonStyled onClick={handleIncrement_5}>
    //       <p>
    //         +<RiNumber5 size='32px' color='white' />
    //       </p>
    //     </CounterButtonStyled>

    //     {/* Multiplicar */}
    //     <CounterButtonStyled right onClick={handleMultiply}>
    //       <FaRegTimesCircle size='32px' color='white' />
    //     </CounterButtonStyled>
    //   </CounterButtonContainerStyled>
    //   <BiReset
    //     cursor='pointer'
    //     size='38px'
    //     color='#F2424c'
    //     onClick={handleReset}
    //   />
    // </CounterContainerStyled>
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>
      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
