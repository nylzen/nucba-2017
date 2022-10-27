import './App.css';
import Condicional from './components/Condicional/Condicional';
import EjemploMap from './components/EjemploMap/EjemploMap';
import MapComponentes from './components/MapComponentes/MapComponentes';
// import Ejemplo from './components/Ejemplo/Ejemplo';
// import {
//   EjemploFuncional,
//   EjemploFuncional2,
//   EjemploProps,
// } from './components/EjemploFuncional/EjemploFuncional';

function App() {
  return (
    <div className='App-header'>
      {/* <Ejemplo></Ejemplo> */}
      {/* <EjemploFuncional /> */}
      {/* <EjemploFuncional2 /> */}
      {/* <EjemploProps pepeTexto={'Hola soy un texto pasado por prop'} /> */}
      {/* <EjemploProps pepeTexto={'Tuki'} numerito={10} /> */}
      {/* <p>Renderizado condicional</p> */}
      {/* <Condicional /> */}
      {/* <p>Renderizado con Map</p> */}
      {/* <EjemploMap /> */}
      <p>Renderizando componentes con map</p>
      <MapComponentes />
    </div>
  );
}

export default App;
