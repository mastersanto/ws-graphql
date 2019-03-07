const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const PORT = 4000;
const ENDPOINT = '/graphql';

const typeDefs = gql`
    type Team {
      id: Int!
      name: String!
    }

    type Votes {
      likes: Int
      dislikes: Int
    }
  
    type Post {
      id: Int!
      imageUrl: String
      title: String
      author: Author
      votes: Votes
    }
  
    type Author {
      id: Int!
      name: String
      posts: [Post] # the list of Posts by this author
    }

    type Query {
      posts: [Post]
      author(id: Int!): Author
    }
    
    type Mutation {
      likePost (
        id: Int!
      ): Post
    }

    type Subscription {
      onPostLike(id: Int!): Post
    }
  
    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
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
