import { Provider } from 'react-redux';
import Counter from './components/counter/Counter';
import store from './store';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
