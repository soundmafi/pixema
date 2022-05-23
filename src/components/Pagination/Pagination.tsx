import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { getTotalPages } from '../../store/selectors/moviesSelectors';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setCurrentPage } from '../../store/slices/requestReducer';
import { StyledButton, StyledContainer } from './styles';

const Pagination = () => {
	const request = useAppSelector(getRequestSearch);
	const dispatch = useDispatch();

	const totalPages = useAppSelector(getTotalPages);

	const handlePagePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setCurrentPage({ ...request, page: request.page - 1 }));
	};

	const handlePageNext = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setCurrentPage({ ...request, page: request.page + 1 }));
	};

	return (
		<StyledContainer>
			<StyledButton onClick={handlePagePrevious}>Previous</StyledButton>
			<StyledButton>{request.page}</StyledButton>
			<StyledButton onClick={handlePageNext}>Next</StyledButton>

			{/* <StyledTotalPage>Total {totalPages}</StyledTotalPage> */}
		</StyledContainer>
	);
};

export default Pagination;
