import { IMovie, IMovies, IMoviesApiResponse } from '../types';

export const transformMovies = (response: IMoviesApiResponse): IMovies => {
	return {
		response: response.Response === 'True' ? true : false,
		totalResults: Number(response.TotalResults),
		totalPages: Math.ceil(Number(response.TotalResults) / 10),
		results: response.Search.map(({Title, imdbID, Poster,Year, Type}): IMovie => {
			return {
				title: Title,
				imdbID: imdbID,
				poster: Poster,
				type: Type,
				year: Year,
			};
		}),
	};
};
