import { configureStore } from '@reduxjs/toolkit';
import filterStateReducer from './slices/filterStateReducer';
import userReducer from './slices/userReducer';
import themeReducer from './slices/themeReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
		filterState: filterStateReducer,
		themeType: themeReducer,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;
