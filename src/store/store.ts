import { configureStore } from '@reduxjs/toolkit';
import filterStateReducer from './slices/filterStateReducer';
import userReducer from './slices/userReducer';

const store = configureStore({
	reducer: {
		user: userReducer,
		filterState: filterStateReducer ,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;