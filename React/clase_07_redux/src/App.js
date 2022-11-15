import Counter from './components/Counter/Counter';
import Logo from './components/Logo/Logo';
import GlobalStyles from './styles/GlobalStyles';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <Logo />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
