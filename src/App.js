import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

export const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer />
                    </Route>
                    <Route exact path='/categories/:categoryId'>
                        <ItemListContainer />
                    </Route>
                    <Route exact path='/contacto'>
                        <h3>contacto</h3>
                    </Route>
                    <Route exact path='/detail/:itemId'>
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}