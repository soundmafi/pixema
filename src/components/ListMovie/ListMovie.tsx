import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { setMovies } from '../../store/slices/moviesReducer';
import { RootStore } from '../../store/store';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import { StyledList } from './styles';

const List = () => {
	const request = useSelector(({ requestSearch }: RootStore) => requestSearch);
	const moviesResponse = useSelector(({ movies }: RootStore) => movies);
	const dispatch = useDispatch();

	useEffect(() => {
		movieApi
			.getMoviesByParams(request)
			.then((movies) => {		
			dispatch(setMovies(transformMovies(movies,request.page )))});
	}, [request]);

	return (
		<StyledList>
			{moviesResponse.results.map(({ title, poster, imdbID }) => {
				return <CardItemMovie key={imdbID} title={title} poster={poster} imdbID={imdbID} />;
			})}
		</StyledList>
	);
};

export default List;
