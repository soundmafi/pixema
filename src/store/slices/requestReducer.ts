import { createSlice } from '@reduxjs/toolkit';
import { IRequestParams } from '../../services/types';

const initialState: IRequestParams = {
	title: 'love',
	year: '',
	type: '',
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

		setCurrentPage: (state, { payload }) => {
			state.page = payload.page;
			state.title = payload.title;
			state.type = payload.type;
			state.year = payload.year;
		},
		// setCurrentPageNext
		// setCurrentPage
	},
});

export default requestSlice.reducer;
export const { setRequest, setCurrentPage } = requestSlice.actions;
