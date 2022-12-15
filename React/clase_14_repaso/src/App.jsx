// import './App.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { TodoProvider } from './context/context';
import Routes from './routes/Routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  

  return (
    <>
      <GlobalStyles />
      <TodoProvider>
        <Routes />
      </TodoProvider>
    </>
  );
}

export default App;
