import { useEffect } from 'react';
import styled from 'styled-components';
import { FilterIcon } from '../../assets/Icons';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getMoviesResponse } from '../../store/selectors/moviesSelectors';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { setMovies } from '../../store/slices/moviesReducer';
import { RootStore } from '../../store/store';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import ModalError from '../ModalError/ModalError';
import Pagination from '../Pagination/Pagination';
import { ListContainer, StyledFilter, StyledList } from './styles';

const List = () => {
	const request = useAppSelector(({ requestSearch }: RootStore) => requestSearch);
	const moviesResponse = useAppSelector(getMoviesResponse);
	const dispatch = useAppDispatch();

	useEffect(() => {
		movieApi.getMoviesByParams(request).then((movies) => {
			dispatch(setMovies(transformMovies(movies)));
		});
	}, [request]);

	const handleOpen = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		dispatch(setStateFilterOpen());
	};

	return (
		<ListContainer>
			<StyledFilter onClick={handleOpen}>
				<FilterIcon />
			</StyledFilter>
			<Pagination />
			<StyledList>
				{moviesResponse.results.length > 0 ? (
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
				) : (
					<StyledError />
				)}
			</StyledList>
		</ListContainer>
	);
};

export default List;

const StyledError = styled(ModalError)`
	/* display: flex; */
	margin: 0 auto;
`;
