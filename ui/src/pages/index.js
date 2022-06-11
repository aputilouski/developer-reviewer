import Homepage from './homepage';
import Posts from './posts';

export const pages = {
  homepage: {
    path: '/',
    component: Homepage,
    label: 'Homepage',
  },
  posts: {
    path: '/posts',
    component: Posts,
    label: 'Posts',
  },
};
