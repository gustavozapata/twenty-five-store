import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import FramedPrints from "./products/FramedPrints";
import DigitalPrints from "./products/DigitalPrints";

function ProductsPage() {
  return (
    <div className="ProductsPage">
      <h1>ProductsPage</h1>
      <Link to="/products/framed-prints">Framed Prints</Link>
      <Link to="/products/digital-prints">Digital Prints</Link>
      <Switch>
        <Route path="/products/framed-prints">
          <FramedPrints />
        </Route>
        <Route path="/products/digital-prints">
          <DigitalPrints />
        </Route>
      </Switch>
    </div>
  );
}

export default ProductsPage;
