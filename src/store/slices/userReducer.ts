import { createSlice } from '@reduxjs/toolkit';

interface IUserStore {
	isAuth: boolean;
	email: string | null;
}
const initialState: IUserStore = {
	isAuth: false,
	email: null,
};

const userSlice = createSlice({
	name: 'Kolia',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.isAuth = true;
			state.email = action.payload;
		},
		unsetUser: (state) => {
			state.isAuth = false;
			state.email = null;
		},
	},
});

export default userSlice.reducer;
export const { setUser, unsetUser } = userSlice.actions;
