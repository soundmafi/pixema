import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilterIcon } from '../../assets/Icons';
import { transformMovies } from '../../services/mappers/movies';
import { IMovies } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getMovies2Response, getMovies2Status } from '../../store/selectors/moviesSelector2';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { fetchMovies } from '../../store/slices/moviesReducer2';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ModalNotFound from '../ModalNotFound/ModalNotFound';
import Pagination from '../Pagination/Pagination';
import TrendsContainer from '../TrendsContainer/TrendsContainer';
import { ListContainer, StyledFilter, StyledList } from './styles';

const List = () => {
	const request = useAppSelector(getRequestSearch);
	const dispatch = useAppDispatch();
	const [isResponse, setIsResponse] = useState(true);
	const [moviesResponse, setMovieResponse] = useState<IMovies>({
		response: null,
		results: [],
		totalResults: 0,
		currentPage: 1,
		totalPages: 0,
	});

	const response = useAppSelector(getMovies2Response);
	const statusExtra = useAppSelector(getMovies2Status);

	useEffect(() => {
		if (request.title !== '') {
			dispatch(fetchMovies(request));
		}
	}, [request]);

	useEffect(() => {
		if (response.Response === 'True') {
			setIsResponse(true);
			setMovieResponse(transformMovies(response));
		} else {
			setIsResponse(false);
		}
	}, [response]);

	const handleOpen = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		dispatch(setStateFilterOpen());
	};

	return (
		<>
			{moviesResponse.response === null ? (
				<TrendsContainer />
			) : statusExtra === 'loading' ? (
				<LoadingSpinner />
			) : (
				<ListContainer>
					<StyledFilter onClick={handleOpen}>
						<FilterIcon />
					</StyledFilter>
					<Pagination />
					{isResponse ? (
						<>
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
			)}
		</>
	);
};

export default List;

const StyledError = styled(ModalNotFound)`
	margin: 0 auto;
`;
