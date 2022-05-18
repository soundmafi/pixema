import { createSlice } from '@reduxjs/toolkit';
import { IMovies } from '../../services/types';

const initialState: IMovies = {
	response: null,
	results: [],
	totalResults: 0,
	currentPage: 1,
	totalPages: 0,
};

const moviesSlice = createSlice({
	name: 'movies-list',
	initialState,
	reducers: {
		setMovies: (state, {payload}) => {
			state.currentPage = payload.currentPage;
			state.results =  payload.results;
			state.totalResults = payload.totalResults;
			state.currentPage = payload.currentPage;
			state.totalPages = payload.totalPages;
		},
	},
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;
