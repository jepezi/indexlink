Consider this route and nav.

```js
const routes =
{component: App, childRoutes: [
  // path: '/website' here causes Home route active
  {path: '/website', component: Wrapper, indexRoute: {component: Home}, childRoutes: [
    {path: 'product_category', component: ProductCategory},
  ]},
  {path: '/login', component: Login},
  {path: '*', component: NotFound},
]};

// IndexLink here is active
<ul>
  <li><IndexLink to="/website" activeClassName="active">Home</IndexLink></li>
  <li><Link to="/website/product_category" activeClassName="active">Category</Link></li>
  <li><Link to="/login" activeClassName="active">login</Link></li>
</ul>
```

When we change `path: '/website' ...` to `path: '/' ...`, then Home route is not.
```js
const routes =
{component: App, childRoutes: [
  {path: '/',                //  <---------------- change path to '/'
...

// With this new link (/website removed), IndexLink here is not active.
<ul>
  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
  <li><Link to="/product_category" activeClassName="active">Category</Link></li>
...
```
