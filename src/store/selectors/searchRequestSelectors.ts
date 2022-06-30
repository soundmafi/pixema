import { RootStore } from '../store';

export const getRequestSearch = ({ requestSearch }: RootStore) => requestSearch;
export const getRequestSearchPage = ({ requestSearch }: RootStore) => requestSearch.page;