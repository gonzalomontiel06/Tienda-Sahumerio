import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Catalogo de productos" />
    </div>
  );
}
