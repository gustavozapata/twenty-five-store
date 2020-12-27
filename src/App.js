import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import BasketPage from "./pages/BasketPage";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Twenty Five Store</h1> */}
        <div className="navigation">
          <Navigation />
        </div>
        <main>
          <Switch>
            <Route path="/basket">
              <BasketPage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
