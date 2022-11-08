import EjemploContexto from './components/EjemploContexto/EjemploContexto';
import EjemploUseReducer from './components/EjemploUseReducer/EjemploUseReducer';
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper';
import SmallContainer from './components/SmallContainer/SmallContainer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GeneralWrapper>
        <SmallContainer>
          <EjemploUseReducer />
          <EjemploContexto />
        </SmallContainer>
      </GeneralWrapper>

      <GlobalStyles />
    </>
  );
}

export default App;
