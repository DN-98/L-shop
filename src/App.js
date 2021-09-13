import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Faq from './components/Faq';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
        <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/faq" component={Faq} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
        <Route/>
      </Switch>
      <Modal/>
    </React.Fragment>
    );
  }
}

export default App;
