import { IMovie, IMovieApi, IMovies, IMoviesApiResponse } from '../types';

export const transformMovies = (response: IMoviesApiResponse): IMovies => {
	return {
		response: response.Response === 'True' ? true : false,
		totalResults: Number(response.TotalResults),
		totalPages: Math.ceil(Number(response.TotalResults) / 10),
		results: response.Search.map((movie: IMovieApi): IMovie => {
			return {
				title: movie.Title,
				imdbID: movie.imdbID,
				poster: movie.Poster,
				type: movie.Type,
				year: movie.Year,
			};
		}),
	};
};
