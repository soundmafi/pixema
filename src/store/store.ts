import { configureStore } from '@reduxjs/toolkit';
import filterStateReducer from './slices/filterStateReducer';
import userReducer from './slices/userReducer';
import themeReducer from './slices/themeReducer';
import favoritesReducer from './slices/favoritesReducer';
import moviesReducer from './slices/moviesReducer';
import requestReducer from './slices/requestReducer';
import moviesReducer2 from './slices/moviesReducer2';
const store = configureStore({
	reducer: {
		user: userReducer,
		filterState: filterStateReducer,
		themeType: themeReducer,
		favorites: favoritesReducer,
		movies: moviesReducer,
		requestSearch: requestReducer,
		movies2: moviesReducer2,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.getState>;
