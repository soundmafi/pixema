import { createSlice } from '@reduxjs/toolkit';
import { IUserResponse } from '../../services/types';

interface IUserStore {
	isAuth: boolean;
	user : IUserResponse|null
}
const initialState: IUserStore = {
	isAuth: false,
	user: null
	
};

const userSlice = createSlice({
	name: 'names',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.isAuth = true;
			state.user = action.payload;

		},
		unsetUser: (state) => {
			state.isAuth = false;
			
		},
	},
});

export default userSlice.reducer;
export const { setUser, unsetUser } = userSlice.actions;
