import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { setMovies } from '../../store/slices/moviesReducer';
import { RootStore } from '../../store/store';
import CardItemMovie from '../CardItemMovie/CardItemMovie';

const List = () => {
	const request = useSelector(({ requestSearch }: RootStore) => requestSearch);
	const moviesResponse = useSelector(({ movies }: RootStore) => movies);
	const dispatch = useDispatch();
	
	useEffect(() => {
		movieApi.getMoviesByParams(request).then((movies) => dispatch(setMovies(transformMovies(movies))));
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

const StyledList = styled.ul`
	grid-area: outlet;

	display: flex;
	gap: 40px;
	flex-wrap: wrap;
	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax (200px, 1fr));
	grid-gap: 10px; */
	width: 100%;
	/* padding: 0;
	margin: 0; */
	list-style: none;

	/* max-width: 960px; */
`;
