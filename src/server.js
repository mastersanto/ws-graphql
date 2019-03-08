const Express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');

const PORT = 4000;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

class Server {
  start() {

    const app = Express();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    server.applyMiddleware({ app });

    // app.use('/static', staticFiles());

    // app.get('/*', view);

    const httpServer = createServer(app);
    server.installSubscriptionHandlers(httpServer);

    httpServer.listen({port: PORT}, () => {
      // console.log(`🚀 Server ready at http://localhost:4000`);
      console.log(`🚀 Server ready at http://localhost:4000/graphql`);
      // console.log(`🚀 Subscriptions ready at ws://localhost:4000/subscriptions`)
    });
  }
}

const server = new Server;
server.start();
// export default Server;
