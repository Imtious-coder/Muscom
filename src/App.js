import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail />
        </Route>
        <Route exact path="/">
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
