import GlobalStyle from './styles/GlobalStyle';
import Logo from './components/logo/Logo';
import Counter from './components/counter/Counter';
import { CountContextProvider } from './context/CountContext';

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
