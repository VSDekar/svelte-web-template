import Error from './Error.svelte';

export const routes = [
  {
    path: '/',
    component: null,
  },
  {
    path: '*',
    component: Error,
  },
];
