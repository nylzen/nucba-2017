import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {
  algo,
  increment,
  increment_5,
  multiply,
} from '../../features/counterSlice';
import { CounterButton } from './AddStyles';

const Add = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <>
      <CounterButton onClick={handleIncrement}>
        <AiOutlinePlusCircle size='32px' color='white' />
      </CounterButton>
      <CounterButton onClick={() => dispatch(increment_5())}>
        <p>
          +<RiNumber5 size='32px' color='white' />
        </p>
      </CounterButton>
      <CounterButton last onClick={() => dispatch(multiply())}>
        <FaRegTimesCircle size='32px' color='white' />
      </CounterButton>
    </>
  );
};
export default Add;
