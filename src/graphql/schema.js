// Imports: GraphQL
// import { ApolloServer } = require( 'apollo-server-express';
import { makeExecutableSchema } from 'apollo-server-express'

//import config from '../config';

// Imports: GraphQL TypeDefs & Resolvers
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
// GraphQL: Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
// Exports
export default schema;