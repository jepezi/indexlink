import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexLink, Link } from 'react-router';
import history from './history';


class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <ul>
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/product_category" activeClassName="active">Category</Link></li>
        <li><Link to="/login" activeClassName="active">login</Link></li>
      </ul>
      {this.props.children}
    </div>;
  }
}

class Wrapper extends Component {
  render() {
    return <div>wrapper {this.props.children}</div>
  }
}

class Home extends Component {
  render() {
    return <div>home</div>
  }
}

class ProductCategory extends Component {
  render() {
    return <div>product category main {this.props.children}</div>
  }
}

class Login extends Component {
  render() {
    return <div>Login</div>
  }
}

class NotFound extends Component {
  render() {
    return <div>Not found</div>
  }
}

const routes =
{component: App, childRoutes: [
  {path: '/', component: Wrapper, indexRoute: {component: Home}, childRoutes: [
    {path: 'product_category', component: ProductCategory},
  ]},
  {path: '/login', component: Login},
  {path: '*', component: NotFound},
]};

render(
  <Router history={history} routes={routes}/>,
  document.getElementById('root')
);