import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Registro';
import Home from './components/Home';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect( () => {
      fetch("https://jsonfy.com/items")
          .then(res => res.json())
          .then(
              (result) => {
                  setItems(result)
              },
              (error) => {
                  setError(error);
              }
          )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>
  } else {
      return (
        <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registro">Registro</Link>
              </li>
            </ul>
          </nav>
          <hr/>

          <Switch>
            <Route path="/producto/detalle/:id" exact  component={ProductoDetalle} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
            <Route path="/" exact component={()=> <Home productos={items} />} />
          </Switch>
        </div>
      </BrowserRouter>
      );
  }
}

export default App;
