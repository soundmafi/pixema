import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FilterIcon } from '../../assets/Icons';
import { IMovies } from '../../services/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getMoviesResponse, getMoviesStatus } from '../../store/selectors/moviesSelector';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import CardItemMovie from '../CardItemMovie/CardItemMovie';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ModalNotFound from '../ModalNotFound/ModalNotFound';
import Pagination from '../Pagination/Pagination';
import TrendsContainer from '../TrendsContainer/TrendsContainer';
import { ListContainer, StyledFilter, StyledList } from './styles';

const List = () => {
	const dispatch = useAppDispatch();
	const [moviesResponse, setMovieResponse] = useState<IMovies>({
		response: '',
		results: [],
		totalResults: 0,
		currentPage: 1,
		totalPages: 0,
	});

	const response = useAppSelector(getMoviesResponse);
	const statusExtra = useAppSelector(getMoviesStatus);

	useEffect(() => {
		// dispatch(fetchMovies(request));
		setMovieResponse(response)
	}, [response.results]);

	const handleOpen = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		dispatch(setStateFilterOpen());
	};

	return (
		<>
			{moviesResponse.response === '' ? (
				<TrendsContainer />
			) : statusExtra === 'loading' ? (
				<LoadingSpinner />
			) : (
				<ListContainer>
					<StyledFilter onClick={handleOpen}>
						<FilterIcon />
					</StyledFilter>
					<Pagination />
					{moviesResponse.response === "True" ? (
						<>
							<StyledList>
								{response.results.map(({ title, poster, imdbID }) => {
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
