import { createSlice, createAsyncThunk, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Params } from 'react-router-dom';
import { movieApi } from '../../services/movieApi';
import {
	IExtraResponseApi, IRequestParams,
} from '../../services/types';

import { useAppSelector } from '../hooks/hooks';
import { getRequestSearch } from '../selectors/searchRequestSelectors';

export interface IRes {
	response: IExtraResponseApi;
	error: any;
	status: string;
}

const initialState: IRes = {
	response: {
		data: {
			Search: [],
			totalResults: '',
			Response: '',
		},
		status: '',
		statusText: '',
		headers: {},
		config: {},
		request: {},
	},
	error: null,
	status: 'idle',
};



export const fetchMovies = createAsyncThunk<any>('movies-list/fetchMovies', async () => {
	const requestCurrent = useAppSelector(getRequestSearch);
	const newResponse = await movieApi.getMovieInfoData(requestCurrent);
	return newResponse
});

const moviesSlice2 = createSlice({
	name: 'movies-list',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
			state.status = 'loading';
			state.error = null;
			console.log('загружаю');
		});
		builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
			state.status = 'success';
			state.response = payload;
			console.log(payload);
			console.log('загружено');
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.error;
			console.log('ошибка');
		});
	},
});

export default moviesSlice2.reducer;
