import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import {  IMovies, IMoviesApiResponse, IRequestParams } from '../../services/types';

export interface IThunkResponse {
	response: IMovies ;
	error: any;
	status: string;
}

const initialState: IThunkResponse = {
	response: {
		response: '',
		results: [],
		totalResults: 0,
		currentPage: 1,
		totalPages: 0,
	},
	error: null,
	status: 'idle',
};

export const fetchMovies = createAsyncThunk<any, IRequestParams>(
	'movies-list/fetchMovies',
	async (requestCurrent): Promise<IMoviesApiResponse> => {
		const apiResponse = await movieApi.getMoviesByParams(requestCurrent);
		return apiResponse;
	}
);

const moviesSlice = createSlice({
	name: 'movies-list',
	initialState,
	reducers: {
		setStatusLoading: (state) => {
			state.status = 'loading';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
			state.status = 'success';
			state.response = transformMovies(payload);
		});
		builder.addCase(fetchMovies.rejected, (state, { payload }) => {
			state.status = 'error';
			state.error = payload;
		});
	},
});

export default moviesSlice.reducer;

export const { setStatusLoading } = moviesSlice.actions;
