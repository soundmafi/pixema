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
		setMovies: (state, action) => {
            console.log(action); 
			state = action.payload;
		},

	},
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;
