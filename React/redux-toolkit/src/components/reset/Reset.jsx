import { BiReset } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { reset } from '../../features/counterSlice';

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <BiReset
      cursor='pointer'
      size='32px'
      color='#f24c4c'
      onClick={() => dispatch(reset())}
    />
  );
};
export default Reset;
