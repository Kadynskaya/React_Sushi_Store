import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Menu from './pages/Menu';
import Rolls from './pages/Rolls';
import Cart from './pages/Cart';
import BakedRolls from "./pages/BakedRolls";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/rolls" component={Rolls} />
            <Route path="/baked-rolls" component={BakedRolls} />
            <Route path="/cart" component={Cart} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
