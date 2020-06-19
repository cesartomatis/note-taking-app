import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';

const NotesList = React.lazy(() => import('./containers/NotesList/NotesList'));
const AddNote = React.lazy(() => import('./containers/AddNote/AddNote'));
const ViewNote = React.lazy(() => import('./containers/ViewNote/ViewNote'));
const EditNote = React.lazy(() => import('./containers/EditNote/EditNote'));

const App = (props) => {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route
            path="/edit/:id"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <EditNote {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/note/:id"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <ViewNote {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <AddNote {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <NotesList {...props} />
              </Suspense>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export default withRouter(App);
