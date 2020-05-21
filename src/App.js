import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import login from './Components/Login';
import fakeAuth from './Components/Login';
import './App.css';
import Product from './Components/Product';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}
function App() {
  return (
    <BrowserRouter>
    <div>
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/Category">Category</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <br/>
        <li><Link to="/login">Admin Area</Link></li>
        
      </ul>
   </nav>

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/Category" component={Category}/>
  <Route path="/Products" component={Products}/>
  <Route path="/Products/:productId" component={Product}/>
  <PrivateRoute authed ={fakeAuth.isAuthenticated} path ='/login' component = {login} />
</Switch>

</div>
</BrowserRouter>

  );
}

export default App;
