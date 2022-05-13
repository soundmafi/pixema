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
