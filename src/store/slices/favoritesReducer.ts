import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../services/types';

interface IFavorites{
	favorites: IMovie[]
}

const initialState: IFavorites = {
	favorites: [
		{
		title: '',
		imdbID: '',
		poster: '',
		type: '',
		year: ''},
]
};

const favoritesSlice = createSlice({
	name: 'Favorites',
	initialState,
	reducers: {
		setFavorite: (state, movie) => {
			state.favorites.push(movie.payload);
		},
	},
});

export default favoritesSlice.reducer;
export const { setFavorite } = favoritesSlice.actions;
