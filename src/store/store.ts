import { configureStore } from '@reduxjs/toolkit';
import filterStateReducer from './slices/filterStateReducer';
import userReducer from './slices/userReducer';
import themeReducer from './slices/themeReducer';
import favoritesReducer from './slices/favoritesReducer';
import requestReducer from './slices/requestReducer';
import moviesReducer from './slices/moviesReducer';
import movieDetailReducer from './slices/movieDetailReducer';
const store = configureStore({
	reducer: {
		user: userReducer,
		filterState: filterStateReducer,
		themeType: themeReducer,
		favorites: favoritesReducer,
		requestSearch: requestReducer,
		movies: moviesReducer,
		movieDeatails:  movieDetailReducer,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.getState>;
