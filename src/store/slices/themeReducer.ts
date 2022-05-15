import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
	isDisable: boolean;
}

const initialState: IThemeState = {
	isDisable: true,
};

const themeSlice = createSlice({
	name: 'themeType',
	initialState,
	reducers: {
		setWhite: (state) => {
			state.isDisable = true;
		},
		setDark: (state) => {
			state.isDisable = false;
		},
	},
});

export default themeSlice.reducer;
export const { setWhite, setDark } = themeSlice.actions;
