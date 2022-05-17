import { IMovieDetails, IMovieDetailsResponse } from '../types';

export const transformMovieDetails = (response: IMovieDetailsResponse): IMovieDetails => {
	return {
		title: response.Title,
		year: response.Year,
		released: response.Released,
		runtime: response.Runtime,
		genre: response.Genre,
		director: response.Director,
		writer: response.Writer,
		actors: response.Actors,
		plot: response.Plot,
		country: response.Country,
		poster: response.Poster,
		ratings: response.Ratings,
		imdbRating: response.imdbRating,
		imdbID: response.imdbID,
		boxOffice: response.BoxOffice,
		production: response.Production,
		response: response.Response === 'True' ? true : false,
		type: response.Type,
		// awards: response.Awards,
	};
};
