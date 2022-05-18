import { configureStore } from '@reduxjs/toolkit';
import filterStateReducer from './slices/filterStateReducer';
import userReducer from './slices/userReducer';
import themeReducer from './slices/themeReducer';
import favoritesReducer from './slices/favoritesReducer';
import moviesReducer from './slices/moviesReducer'
const store = configureStore({
	reducer: {
		user: userReducer,
		filterState: filterStateReducer,
		themeType: themeReducer,
		favorites: favoritesReducer,
		movies: moviesReducer
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;
