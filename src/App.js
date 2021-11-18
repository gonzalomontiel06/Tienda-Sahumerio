import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';
import { LoadingProvider } from './context/LoadingContext';
import { Footer } from './components/Footer/Footer';
import { HomeView } from './components/HomeView/HomeView';
import { Checkout } from './components/Checkout/Checkout';
import { Login } from './components/Login/Login';
import { LoginProvider } from './context/LoginContext';
import { SignUp } from './components/SignUp/SignUp';

export const App = () => {

    return(
        
        <div className="App">
            <LoadingProvider>
                <CartProvider>
                    <LoginProvider>
                        <BrowserRouter>
                            <NavBar />
                            <Switch>
                                <Route exact path='/'>
                                    <HomeView />
                                </Route>
                                <Route exact path='/productos'>
                                    <ItemListContainer />
                                </Route>
                                <Route exact path='/categories/:categoryId'>
                                    <ItemListContainer />
                                </Route>
                                <Route exact path='/detail/:itemId'>
                                    <ItemDetailContainer />
                                </Route>
                                <Route exact path='/cartview'>
                                    <CartView />
                                </Route>
                                <Route exact path='/checkout'>
                                    <Checkout />
                                </Route>
                                <Route exact path='/login'>
                                    <Login />
                                </Route>
                                <Route exact path='/signup'>
                                    <SignUp />
                                </Route>
                            </Switch>
                            <Footer />
                        </BrowserRouter>
                    </LoginProvider>
                </CartProvider>
            </LoadingProvider>
        </div>
    )
}