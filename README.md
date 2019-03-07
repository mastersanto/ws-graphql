# Graphql workshop

## Summary

* Hello
    * graphql
```
npm install graphql

node hello.js
```
* Without Express

https://www.apollographql.com/docs/apollo-server/features/mocking.html


* GraphQL Server
    * express
    * express-graphql
```
npm install express express-graphql graphql

node server.js
```

* Apollo Server
```
npm install apollo-server-express express graphql

node server-apollo.js

query {
  hello
}

```

* Apollo Server
```
# Write your query or mutation here
query Posts {
  posts {
    id
    title
    imageUrl
    votes {
      likes
      dislikes
    }
  }
}

mutation LikePost($id: Int!) {
  likePost(id: $id) {
    votes {
      likes
      dislikes
    }
  }
}

// VARIABLES
{
  "id": 1
}
```
* Next
    * [Mocking](https://www.apollographql.com/docs/apollo-server/features/mocking.html)