import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieApi } from '../../services/movieApi';
import { IMoviesApiResponse, IRequestParams } from '../../services/types';

export interface IThunkResponse {
	response: IMoviesApiResponse;
	error: any;
	status: string;
}

const initialState: IThunkResponse = {
	response: {
		Response: 'string',
		Search: [],
		totalResults: '',
	},
	error: null,
	status: 'idle',
};

export const fetchMovies = createAsyncThunk<any, IRequestParams, {}>(
	'movies-list/fetchMovies',
	async (requestCurrent): Promise<IMoviesApiResponse> => {
		const newResponse = await movieApi.getMovieTitleSearchThunk(requestCurrent);
		return newResponse;
	}
);

const moviesSlice2 = createSlice({
	name: 'movies-list',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
			state.status = 'success';
			state.response = payload;

		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.status = 'error';

		});
	},
});

export default moviesSlice2.reducer;
