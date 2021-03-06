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
	totalResults: string;
}

export interface IMovie {
	title: string;
	imdbID: string;
	poster: string;
	type: string;
	year: string;
}

export interface IMovies {
	response: string;
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
	type: string;
}

export interface IUserResponse {
	accessToken: string;
	auth: {};
	displayName: string;
	email: string;
	emailVerified: boolean;
	isAnonymous: boolean;
	metadata: {};
	phoneNumber: null | string;
	photoURL: string;
	proactiveRefresh: {};
	providerData: [{}];
	providerId: null | string;
	reloadListener: null | string;
	reloadUserInfo: {};
	stsTokenManager: {};
	tenantId: null | string;
	uid: null | string;
}

export interface IExtraDataSuccesResponseApi {
		Search: IMovie[];
		totalResults: string;
		Response: string;
}

export interface IExtraDataErrorResponseApi {
		Error: string;
		Response: string;
}

export interface IExtraResponseApi {
	data: IExtraDataSuccesResponseApi| IExtraDataErrorResponseApi ;
	status: any;
	statusText: string;
	headers: {};
	config: {};
	request: {};
}
