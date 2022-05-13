import axios from 'axios';
import { IRequestParams } from './types';

class MovieServices {
	private readonly API_KEY = process.env.REACT_APP_API_KEY;
	private readonly API_URL = process.env.REACT_APP_API_URL;

	private api = axios.create({
		baseURL: `${this.API_URL}?apiKey=${this.API_KEY}&`,
	});

	public async getMoviesByParams(params: IRequestParams): Promise<any> {
		const body = {
			s: params.title,
			type: params.type,
			y: params.year,
			page: params.page,
		};

		const { data } = await this.api.get('/', { params: body });
		return data;
	}
}

export const movieApi = new MovieServices();
