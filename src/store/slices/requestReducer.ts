import { createSlice } from '@reduxjs/toolkit';
import { IRequestParams } from '../../services/types';

const initialState: IRequestParams = {
	title: 'love',
	year: '2010',
	type: 'movie',
	page: 1,
};

const requestSlice = createSlice({
	name: 'request ',
	initialState,
	reducers: {
		setRequest: (state, { payload }) => {
			state.page = payload.page;
			state.title = payload.title;
			state.type = payload.type;
			state.year = payload.year;
		},
	},
});

export default requestSlice.reducer;
export const { setRequest } = requestSlice.actions;
