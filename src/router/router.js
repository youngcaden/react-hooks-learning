


import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Loading from '../components/Loading'

const App = React.lazy(() => import('../components/App'))
const Counter = React.lazy(() => import('../components/Counter'))
const Hooks = React.lazy(() => import('../components/Hooks'))

const MyHooks = React.lazy(() => import('../components/useCount'))

const Ref = React.lazy(() => import('../components/Ref'))



const Application = () => (
  <Router>
        <Suspense fallback={ <Loading /> }>
            <Switch>
                    <Route exact path="/" component={App}/>
            </Switch>
        </Suspense>
        <Suspense fallback={ <Loading /> }>
            <Switch>
                    <Route path="/counter" component={Counter}/>
            </Switch>
        </Suspense>
        <Suspense fallback={ <Loading /> }>
            <Switch>
                    <Route path="/hooks" component={Hooks}/>
            </Switch>
        </Suspense>
        <Suspense fallback={ <Loading /> }>
            <Switch>
                    <Route path="/my-hook" component={MyHooks}/>
            </Switch>
        </Suspense>
        <Suspense fallback={ <Loading /> }>
            <Switch>
                    <Route path="/my-ref" component={ Ref }/>
            </Switch>
        </Suspense>
  </Router>
);

export default Application
