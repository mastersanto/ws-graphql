const { find, filter } = require('lodash');
// const { find } = 'lodash';
// const gql = 'graphql-tag';
const { PubSub, withFilter } = require('apollo-server');

// const type { Post } = require('../types');

// const { pubsub } = '../index';
const defaults = require('./defaults');
// const { authors, posts } = './defaults';

const {authors, posts} = defaults;

const ON_POST_DISLIKE = 'ON_POST_DISLIKE';
const ON_POST_LIKE = 'ON_POST_LIKE';

const pubsub = new PubSub();

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id: id }),
  },
  Mutation: {
    async likePost(_, { id }) {
      const post = find(posts, { id });
      if (!post) {
        throw new Error(`Couldn't find post with id ${id}`);
      }
      post.votes.likes += 1;
      pubsub.publish(ON_POST_LIKE, { onPostLike: post });
      return post;
    },
    async dislikePost(_, { id }) {
      const post = find(posts, { id });
      if (!post) {
        throw new Error(`Couldn't find post with id ${id}`);
      }
      post.votes.dislikes += 1;
      pubsub.publish(ON_POST_DISLIKE, { onPostDislike: post });
      return post;
    },
  },
  Subscription: {
    onPostLike: {
      subscribe: withFilter(
          () => pubsub.asyncIterator('ON_POST_LIKE'),
          (payload, variables) => {
            return payload.onPostLike.id === variables.id;
          },
      ),
    },
  },
  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  },
  Post: {
    author: (post) => find(authors, { id: post.authorId }),
  },
};

module.exports = resolvers;
// export default resolvers;
