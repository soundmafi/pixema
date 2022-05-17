export interface IRequestParams {
	title: string;
	year: string;
	type: string;
	page: number;
}

export interface IMovieApi {
	Title: string;
	imdbID: string;
	Poster: string;
	Type: string;
	Year: string;
}

export interface IMoviesApiResponse {
	Response: string;
	Search: IMovieApi[];
	TotalResults: string;
}

export interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
	type: string;
	year: string;
}

export interface IMovies {
	response: boolean | null;
	results: IMovie[];
	totalResults: number;
	currentPage?: number;
	totalPages: number;
}

export interface IMovieDetailsResponse {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Ratings: [];
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	DVD: string;
	BoxOffice: string;
	Production: string;
	Website: string;
	Response: string;
}

export interface IMovieDetails {
	title: string;
	year: string;
	released: string;
	runtime: string;
	genre: string;
	director: string;
	writer: string;
	actors: string;
	plot: string;
	country: string;
	poster: string;
	ratings: [];
	imdbRating: string;
	imdbID: string;
	boxOffice: string;
	production: string;
	response: boolean;
	// type: string;
	// awards: string;
}

export interface IRequestDetailsParams {
	imdbID: string|undefined;
} 