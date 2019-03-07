type Author = {
  id: number;
name: string;
}

type Votes = {
  dislikes: number;
likes: number;
}

export type Post = {
  id: number;
imageUrl: string;
title: string;
author: Author;
votes: Votes;
}

export type Page = {
  title: string;
}
