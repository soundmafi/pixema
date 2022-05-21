import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { setCurrentPage } from '../../store/slices/requestReducer';
import { RootStore } from '../../store/store';
import { StyledButton, StyledContainer } from './styles';

const Pagination = () => {
	const request = useAppSelector(({ requestSearch }: RootStore) => requestSearch);
	const dispatch = useDispatch();

	const totalPages = useAppSelector(({ movies }: RootStore) => movies.totalPages);

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
