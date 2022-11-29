import { ReactQueryDevtools } from 'react-query/devtools';
import Routes from './routes/Routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Routes />
      <ReactQueryDevtools />
      <GlobalStyles />
    </>
  );
}

export default App;
