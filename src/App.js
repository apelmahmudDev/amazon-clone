import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {

  const [product, setProduct] = useState([]);
  // console.log(product)

	return (
		<Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Checkout product={product}></Checkout>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is the default */}
          <Route path="/">
            <Header product={product}/>
            <Home product={product} setProduct={setProduct} />
            <Footer></Footer>
          </Route>
        </Switch>
		</div>
    </Router>
	);
}

export default App;
