import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';
import { LoadingProvider } from './context/LoadingContext';

export const App = () => {

    return(
        <div className="App">
            <LoadingProvider>
                <CartProvider>
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
                            <Route exact path='/cartview'>
                                <CartView />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </CartProvider>
            </LoadingProvider>
        </div>
    )
}