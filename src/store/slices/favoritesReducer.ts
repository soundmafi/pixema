import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../services/types';

interface IFavorites {
	favorites: IMovie[];
}

const initialState: IFavorites = {
	favorites: [
		{
			title: '',
			imdbID: '',
			poster: '',
			type: '',
			year: '',
		},
	],
};

const favoritesSlice = createSlice({
	name: 'Favorites',
	initialState,
	reducers: {
		setFavorite: (state, movie) => {
			state.favorites.push(movie.payload);
		},

		unsetFavorite: (state, imdbID) => {
			state.favorites = state.favorites.filter((movie) => {
				return movie.imdbID !== imdbID.payload;
			});
		},
	},
});

export default favoritesSlice.reducer;
export const { setFavorite, unsetFavorite } = favoritesSlice.actions;
