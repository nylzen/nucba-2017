import './App.css';
import AppWrapper from './components/AppWrapper/AppWrapper';
import Chakra from './components/Chakra/Chakra';
import EjemploEnLinea from './components/EjemploEnLinea/EjemploEnLinea';
import EjemploModule from './components/EjemploModule/EjemploModule';
import EjemploObjeto from './components/EjemploObjeto/EjemploObjeto';
import EjemploStyled from './components/EjemploStyled/EjemploStyled';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      {/* <AppWrapper>
        <h1>Holis</h1>
        <EjemploEnLinea />
        <EjemploObjeto />
        <EjemploModule />
        <EjemploStyled />
      </AppWrapper> */}
      <Chakra />
      {/* <GlobalStyles /> */}
    </>
  );
}

export default App;
