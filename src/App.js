import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { CartView } from './components/CartView/CartView';

export const App = () => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito);

    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }

    const removeItem = (itemId) => {
        const newCart = carrito.filter(prod => prod.id !== itemId)
        setCarrito(newCart)
    }

    const calcularItemCart = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const clearCart = () => {
        setCarrito([])
    }

    const isInCart = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }


    return(
        <div className="App">
            <CartContext.Provider value={ {addToCart, removeItem, calcularItemCart, carrito, clearCart, isInCart} }>
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
            </CartContext.Provider>
        </div>
    )
}