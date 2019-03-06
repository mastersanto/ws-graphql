const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  hello: String
}

schema {
  query: Query
}`;

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
        endpoint: '/graphql',
        settings: {
            'editor.theme': 'light'
        }
    }
});

schema.applyMiddleware({ app });

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
