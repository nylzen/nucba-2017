import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Speakers from './components/speakers/Speakers';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <Speakers />
        {/* Nosotros */}
        {/* LineUp */}
      </Main>
      {/* footer */}
    </>
  );
}

export default App;
