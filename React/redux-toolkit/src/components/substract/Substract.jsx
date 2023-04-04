import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiDivideCircle } from 'react-icons/fi';
import { RiNumber5 } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { decrement, decrement_5, divide } from '../../features/counterSlice';
import { CounterButton } from './SubstractStyles';

const Substract = () => {
  const dispatch = useDispatch();
  return (
    <>
      <CounterButton last onClick={() => dispatch(divide())}>
        <FiDivideCircle size='32px' color='white' />
      </CounterButton>
      <CounterButton onClick={() => dispatch(decrement_5())}>
        <p>
          -<RiNumber5 size='32px' color='white' />
        </p>
      </CounterButton>
      <CounterButton onClick={() => dispatch(decrement())}>
        <AiOutlineMinusCircle size='32px' color='white' />
      </CounterButton>
    </>
  );
};
export default Substract;
