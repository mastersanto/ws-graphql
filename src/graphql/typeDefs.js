const { gql } = require('apollo-server-express');

const typeDefs = gql`

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

module.exports = typeDefs;
// export default typeDefs;
