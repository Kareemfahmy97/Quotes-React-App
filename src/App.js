import React,{Suspense} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import("./pages/Newquote"));
const QuotesDetails = React.lazy(() => import('./pages/QuotesDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Quotes = React.lazy(()=> import('./pages/Quotes'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuotesDetails />
          </Route>
          <Route path="/newquote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
