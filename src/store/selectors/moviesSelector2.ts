import { RootStore } from '../store';

export const getMovies2Response = ({ movies2 }: RootStore) => movies2.response;
export const getMovies2Error = ({ movies2 }: RootStore) => movies2.error;
export const getMovies2Status = ({ movies2 }: RootStore) => movies2.status;