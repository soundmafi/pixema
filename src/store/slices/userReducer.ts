import { createSlice } from '@reduxjs/toolkit';
import { IUserResponse } from '../../services/types';

interface IUserStore {
	isAuth: boolean;
	user : IUserResponse
}
const initialState: IUserStore = {
	isAuth: false,
	user: {
		accessToken: '',
		auth: {},
		displayName:  '',
		email:  '',
		emailVerified: false,
		isAnonymous: false,
		metadata: {},
		phoneNumber: '',
		photoURL:  '',
		proactiveRefresh: {},
		providerData: [{}],
		providerId: '',
		reloadListener: '',
		reloadUserInfo: {},
		stsTokenManager: {},
		tenantId: '',
		uid: '',
	}
	
};

const userSlice = createSlice({
	name: 'names',
	initialState,
	reducers: {
		setUser: (state, {payload}) => {
			state.isAuth = true;
			state.user = payload.user;
		},
		unsetUser: (state) => {
			state.isAuth = false;
			
		},
	},
});

export default userSlice.reducer;
export const { setUser, unsetUser } = userSlice.actions;
