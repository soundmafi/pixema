import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getTotalPages } from '../../store/selectors/moviesSelectors';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setCurrentPage } from '../../store/slices/requestReducer';
import { StyledButton, StyledButtonNav, StyledContainer, StyledTotalPage } from './styles';

const Pagination = () => {
	const request = useAppSelector(getRequestSearch);
	const dispatch = useAppDispatch();

	const totalPages = useAppSelector(getTotalPages);

	const handlePagePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
		request.page > 1 && 
			dispatch(setCurrentPage({ ...request, page: request.page - 1 }));
	};

	const handlePageNext = (e: React.MouseEvent<HTMLButtonElement>) => {
		request.page < totalPages &&
			dispatch(setCurrentPage({ ...request, page: request.page + 1 }));
	};

	return (
		<StyledContainer>
			<StyledButtonNav onClick={handlePagePrevious}>Previous</StyledButtonNav>
			<StyledButton>{request.page}</StyledButton>
			<StyledButtonNav onClick={handlePageNext}>Next</StyledButtonNav>
			<StyledTotalPage>Total pages: {totalPages}</StyledTotalPage>
		</StyledContainer>
	);
};

export default Pagination;
