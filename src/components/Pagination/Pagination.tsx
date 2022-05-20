import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/slices/requestReducer';
import { RootStore } from '../../store/store';
import { StyledButton, StyledContainer, StyledTotalPage } from './styles';

const Pagination = () => {
	const request = useSelector(({ requestSearch }: RootStore) => requestSearch);
	const dispatch = useDispatch();

	const totalPages = useSelector(({ movies }: RootStore) => movies.totalPages);

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

			<StyledTotalPage>TotalPages: {totalPages}</StyledTotalPage>
		</StyledContainer>
	);
};

export default Pagination;
