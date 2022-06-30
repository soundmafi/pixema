import { RootStore } from '../store';

export const getMoviesResponse = ({ movies }: RootStore) => movies.response;
export const getMoviesError = ({ movies }: RootStore) => movies.error;
export const getMoviesStatus = ({ movies }: RootStore) => movies.status;
export const getTotalPages = ({ movies }: RootStore) => +movies.response.totalPages;