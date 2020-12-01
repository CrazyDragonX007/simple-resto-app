import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

class App extends Component {
render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Route path="/" exact component={Home} />
    <Route path="/checkout" exact component={Checkout} />
    </div>
    </BrowserRouter>
  );
}
}
export default App;
