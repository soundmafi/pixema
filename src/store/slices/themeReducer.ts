import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
	themeType: string;
}

const initialState: IThemeState = {
	themeType: 'darkTheme',
};

const themeSlice = createSlice({
	name: 'themeType',
	initialState,
	reducers: {
		setWhite: (state) => {
			state.themeType = 'darkTheme';
		},
		setDark: (state) => {
			state.themeType = 'lightTheme';
		},
	},
});

export default themeSlice.reducer;
export const { setWhite, setDark } = themeSlice.actions;
