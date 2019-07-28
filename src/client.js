
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';


const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://localhost:4567/graphql',
    cache,
    resolvers: {}
  })

export default client;