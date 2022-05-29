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
		request.page > 1 && dispatch(setCurrentPage({ ...request, page: request.page - 1 }));
	};

	const handlePage = (e: React.MouseEvent<HTMLElement>) => {
		return Number(e.currentTarget.textContent);
		// dispatch(setCurrentPage({ ...request, page: Number(e.currentTarget.textContent) }));
	};

	const handlePageNext = (e: React.MouseEvent<HTMLButtonElement>) => {
		request.page < totalPages - 2 &&
			dispatch(setCurrentPage({ ...request, page: request.page + 1 }));
	};

	return (
		<StyledContainer>
			<StyledButtonNav onClick={handlePagePrevious}>Previous</StyledButtonNav>
			{Array.from({ length: totalPages }).map((_, i) => {
				return i < 3 ? <StyledButton>{request.page + i}</StyledButton> : '';
			})}
			<StyledButtonNav onClick={handlePageNext}>Next</StyledButtonNav>
			<StyledTotalPage>Total pages: {totalPages}</StyledTotalPage>
		</StyledContainer>
	);
};

export default Pagination;
