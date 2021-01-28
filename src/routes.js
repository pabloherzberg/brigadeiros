import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cardapio from "./Pages/Cardapio";
import Carrinho from './Pages/Carrinho'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cardapio" component={Cardapio} />
        <Route exact path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}
