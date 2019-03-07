const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const PORT = 4000;
const ENDPOINT = '/graphql';

const typeDefs = gql`
    type Query {
      hello: String
    }
    
    schema {
      query: Query
    }
`;

const resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

const app = express();
const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: ENDPOINT,
    settings: {
      'editor.theme': 'light'
    }
  }
});

schema.applyMiddleware({app});

app.listen(PORT, () => {
  console.log(`🚀 Now browse to localhost:${PORT}${ENDPOINT}`)
});
