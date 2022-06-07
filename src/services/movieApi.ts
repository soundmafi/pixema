import axios from 'axios';
import { IRes } from '../store/slices/moviesReducer2';
import {
	IExtraResponseApi,
	IMovieDetailsResponse,
	IMoviesApiResponse,
	IRequestParams,
} from './types';

class MovieServices {
	private readonly API_KEY = process.env.REACT_APP_API_KEY;
	private readonly API_URL = process.env.REACT_APP_API_URL;

	private api = axios.create({
		baseURL: `${this.API_URL}?apiKey=${this.API_KEY}&`,
	});

	public async getMoviesByParams(params: IRequestParams): Promise<IMoviesApiResponse> {
		const body = {
			s: params.title,
			type: params.type,
			y: params.year,
			page: params.page,
		};
		const { data } = await this.api.get('/', { params: body });
		return data;
	}

	// public async getMovieInfoData(body = {s: 'night story'}){
	// 	const {data} = await this.api.get<IMoviesApiResponse>('/', {params: body})
	// 	return data;
	// }

	public async getMovieInfoData(params: IRequestParams) {
		const body = {
			s: params.title,
			type: params.type,
			y: params.year,
			page: params.page,
		};

		const data = await this.api.get<IExtraResponseApi>('/', { params: body });
		return data;
	}

	// public async getMovieInfoData(params:IRequestParams){
	// 	const body = {
	// 		s: params.title,
	// 		type: params.type,
	// 		y: params.year,
	// 		page: params.page,
	// 	};
	// 	const {data} = await this.api.get<IMoviesApiResponse>('/', {params: body})
	// 	return data;
	// }

	public async getMovieDetails(params: string | undefined): Promise<IMovieDetailsResponse> {
		const request = {
			i: params,
		};
		const { data } = await this.api.get<any>('/', { params: request });
		return data;
	}

	public async getMovieTitleSearch(params: IRequestParams) {
		const search = {
			s: params,
		};

		const { data } = await this.api.get('/', { params: search });
		return data;
	}
}

export const movieApi = new MovieServices();
