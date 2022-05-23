import { RootStore } from '../store';

export const getMoviesResponse = ({ movies }: RootStore) => movies;
export const getMoviesList = ({ movies }: RootStore) => movies.results;
export const getTotalPages = ({ movies }: RootStore) => movies.totalPages;