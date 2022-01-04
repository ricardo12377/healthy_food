import './App.css';
import Footer from './pages/paginaPrincipal/Footer';
import PaginaPrincipal from './pages/paginaPrincipal/PaginaPrincipal'
import QuartaParte from './pages/paginaPrincipal/QuartaParte';
import QuintaParte from './pages/paginaPrincipal/QuintaParte';
import SegundaParte from './pages/paginaPrincipal/SegundaParte';
import TerceiraParte from './pages/paginaPrincipal/TerceiraParte';

function App() {
  return (
    <div className='container'>
      <PaginaPrincipal />
      <SegundaParte />
      <TerceiraParte />
      <QuartaParte />
      <QuintaParte />
      <Footer />
    </div>
  );
}

export default App;
