import { RootStore } from '../store';

export const getMoviesDetailsResponse = ({ movieDeatails }: RootStore) => movieDeatails.response;
export const getMoviesDetailsError = ({ movieDeatails }: RootStore) => movieDeatails.error;
export const getMoviesDetailsStatus = ({ movieDeatails }: RootStore) => movieDeatails.status;
