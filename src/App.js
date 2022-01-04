import './App.css';
import Footer from './pages/paginaPrincipal/Footer';
import PaginaPrincipal from './pages/paginaPrincipal/PaginaPrincipal'
import QuartaParte from './pages/paginaPrincipal/QuartaParte';
import QuintaParte from './pages/paginaPrincipal/QuintaParte';
import SegundaParte from './pages/paginaPrincipal/SegundaParte';
import TerceiraParte from './pages/paginaPrincipal/TerceiraParte';
import Registro from '../src/pages/registro/Registro'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router className='container'>
      

      <Switch >
        <Route exact path="/">
        <PaginaPrincipal />
        <SegundaParte />
        <TerceiraParte />
        <QuartaParte />
        <QuintaParte />
        <Footer />
        </Route>

        <Route path="/registro">
          <Registro />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
