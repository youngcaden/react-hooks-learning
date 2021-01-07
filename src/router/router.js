


import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = React.lazy(() => import('../components/App'))
const Counter = React.lazy(() => import('../components/Counter'))
const Hooks = React.lazy(() => import('../components/Hooks'))


const Application = () => (
  <Router>
        <Suspense fallback={<div>Loading homepage</div>}>
            <Switch>
                    <Route exact path="/" component={App}/>
            </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading.../counter</div>}>
            <Switch>
                    <Route path="/counter" component={Counter}/>
            </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading.../hooks</div>}>
            <Switch>
                    <Route path="/hooks" component={Hooks}/>
            </Switch>
        </Suspense>
  </Router>
);

export default Application
