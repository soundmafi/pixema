import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { setMovies } from '../../store/slices/moviesReducer';
import { RootStore } from '../../store/store';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import Pagination from '../Pagination/Pagination';
import { ListContainer, StyledList } from './styles';

const List = () => {
	const request = useAppSelector(({ requestSearch }: RootStore) => requestSearch);
	const moviesResponse = useAppSelector(({ movies }: RootStore) => movies);
	const dispatch = useDispatch();

	useEffect(() => {
		movieApi.getMoviesByParams(request).then((movies) => {
			dispatch(setMovies(transformMovies(movies, request.page)));
		});
	}, [request]);

	return (
		<ListContainer>
			<Pagination />
			<StyledList>
				{
					// (moviesResponse.results < 1)?console.log('oops'):

					moviesResponse.results.map(({ title, poster, imdbID }) => {
						return (
							<CardItemMovie
								key={imdbID}
								title={title}
								poster={poster}
								imdbID={imdbID}
							/>
						);
					})
				}
			</StyledList>
		</ListContainer>
	);
};

export default List;
