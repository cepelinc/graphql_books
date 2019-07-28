import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BooksList from '../components/BooksList';
import BookDetail from '../components/BookDetail';

const routes = (
  <Switch>
    <Route path="/books" component={BooksList} />
    <Route path="/book/:mode(edit|create)/:bookId?" component={BookDetail} />
    <Redirect from="/" to="/books" />
  </Switch>
);

export default routes;
