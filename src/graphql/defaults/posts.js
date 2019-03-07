const posts = [
  {
    __typename: 'Post',
    id: 1,
    authorId: 1,
    imageUrl: 'https://placekitten.com/492/550',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    votes: {
      __typename: 'Votes',
      dislikes: 2,
      likes: 2,
    }
  },
  {
    __typename: 'Post',
    id: 2,
    authorId: 2,
    imageUrl: 'https://placekitten.com/492/550',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    votes: {
      __typename: 'Votes',
      dislikes: 2,
      likes: 2,
    }
  },
  {
    __typename: 'Post',
    id: 3,
    authorId: 3,
    imageUrl: 'https://placekitten.com/492/550',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    votes: {
      __typename: 'Votes',
      dislikes: 2,
      likes: 2,
    }
  },
  {
    __typename: 'Post',
    id: 4,
    authorId: 4,
    imageUrl: 'https://placekitten.com/492/550',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    votes: {
      __typename: 'Votes',
      dislikes: 2,
      likes: 2,
    }
  }
];

module.exports = posts;
