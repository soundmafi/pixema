import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieApi } from '../../services/movieApi';
import { IMovieDetailsResponse} from '../../services/types';

export interface IThunkDetailsResponse {
	response: IMovieDetailsResponse;
	error: any;
	status: string;
}

const initialState: IThunkDetailsResponse = {
	response: {
		Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        Ratings: [],
        Metascore: '',
        imdbRating: '',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        DVD: '',
        BoxOffice: '',
        Production: '',
        Website: '',
        Response: '',
	},
	error: null,
	status: 'idle',
};

export const fetchMovieDetails = createAsyncThunk<any, string, {}>(
	'movies-details/fetchMoviesDetails',
	async (requestIdMovie): Promise<IMovieDetailsResponse> => {
		const responseDetails = await movieApi.getMovieDetails(requestIdMovie);
		return responseDetails;
	}
);

const moviesDetailsSlice = createSlice({
	name: 'movies-details',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovieDetails.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
			state.status = 'success';
			state.response = (payload);
			
		});
		builder.addCase(fetchMovieDetails.rejected, (state, action) => {
			state.status = 'error';
		});
	},
});

export default moviesDetailsSlice.reducer;
