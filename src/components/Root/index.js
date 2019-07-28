import React from 'react';
import { Router } from 'react-router-dom';
import routes from '../../routes';
import history from '../../history';
import MainContainer from '../MainContainer';
import {ApolloProvider} from 'react-apollo'
import client from '../../client'

const Root = () => (
  <ApolloProvider client={client}>
    <MainContainer>
      <Router history={history}>{routes}</Router>
    </MainContainer>
  </ApolloProvider>
);

export default Root;
