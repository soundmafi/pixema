import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilterIcon } from '../../assets/Icons';
import { transformMovies } from '../../services/mappers/movies';
import { movieApi } from '../../services/movieApi';
import { IExtraResponseApi, IMovie } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
	getMovies2Error,
	getMovies2Response,
	getMovies2Status,
} from '../../store/selectors/moviesSelector2';
import { getMoviesResponse } from '../../store/selectors/moviesSelectors';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { setMovies } from '../../store/slices/moviesReducer';
import { fetchMovies, IRes } from '../../store/slices/moviesReducer2';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ModalNotFound from '../ModalNotFound/ModalNotFound';
import Pagination from '../Pagination/Pagination';
import { ListContainer, StyledFilter, StyledList } from './styles';

const List = () => {
	const request = useAppSelector(getRequestSearch);
	const moviesResponse = useAppSelector(getMoviesResponse);
	const dispatch = useAppDispatch();
	const [isResponse, setIsResponse] = useState(true);

	// const response = useAppSelector(getMovies2Response);
	// const errorExtra = useAppSelector(getMovies2Error);
	// const statusExtra = useAppSelector(getMovies2Status);
	// dispatch(fetchMovies())

	useEffect(() => {
		movieApi.getMoviesByParams(request).then((movies) => {
			if (movies.Response === 'True') {
				setIsResponse(true);
				dispatch(setMovies(transformMovies(movies)));
			} else {
				setIsResponse(false);
			}
		});
	}, [request]);

	const handleOpen = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		dispatch(setStateFilterOpen());
	};

	return (
		<ListContainer>
			{isResponse ? (
				<>
					<StyledFilter onClick={handleOpen}>
						<FilterIcon />
					</StyledFilter>
					<Pagination />
					<StyledList>
						{moviesResponse.results.map(({ title, poster, imdbID }) => {
							return (
								<CardItemMovie
									key={imdbID}
									title={title}
									poster={poster}
									imdbID={imdbID}
								/>
							);
						})}
					</StyledList>
				</>
			) : (
				<StyledError />
			)}
		</ListContainer>
	);
};

export default List;

const StyledError = styled(ModalNotFound)`
	/* display: flex; */
	margin: 0 auto;
`;
