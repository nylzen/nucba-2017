import Contador from './components/Contador/Contador';
import EjemploOnChange from './components/EjemploOnChange/EjemploOnChange';
import EjemploOnClick from './components/EjemploOnClick/EjemploOnClick';
import EjemploOnSubmit from './components/EjemploOnSubmit/EjemploOnSubmit';
import EjemploRefEffect from './components/EjemploRefEffect/EjemploRefEffect';
import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect';
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper';
import Ref from './components/Ref/Ref';
import SmallContainer from './components/SmallContainer/SmallContainer';

function App() {
  return (
    <GeneralWrapper>
      <SmallContainer>
        {/* <Contador /> */}
        {/* <Ref /> */}
        {/* <EjemploOnClick /> */}
        {/* <EjemploOnChange /> */}
        {/* <EjemploOnSubmit /> */}
        {/* <EjemploUseEffect /> */}
        <EjemploRefEffect />
      </SmallContainer>
    </GeneralWrapper>
  );
}

export default App;
