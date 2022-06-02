import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getTotalPages } from '../../store/selectors/moviesSelectors';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setCurrentPage } from '../../store/slices/requestReducer';
import { StyledButton, StyledButtonNav, StyledContainer, StyledTotalPage } from './styles';

const Pagination = () => {
	const request = useAppSelector(getRequestSearch);
	const totalPages = useAppSelector(getTotalPages);
	const dispatch = useAppDispatch();
	const [selectedPage, setSelectedPage] = useState<number>(1);
	const [lastSelected, setLastSelected] = useState<number>(1);

	const handlePagePrevious = () => {
		request.page > 1 && dispatch(setCurrentPage({ ...request, page: request.page - 1 }));
		selectedPage > 1 && setSelectedPage(selectedPage - 1);
		lastSelected > 1 && setLastSelected(lastSelected - 1);
	};

	const handlePageNext = () => {
		request.page < totalPages &&
			dispatch(setCurrentPage({ ...request, page: request.page + 1 }));
		selectedPage < totalPages && setSelectedPage(selectedPage + 1);
		lastSelected + 2 < totalPages && setLastSelected(lastSelected + 1);
	};

	const handlePage = (e: React.MouseEvent<HTMLElement>) => {
		setSelectedPage(Number(e.currentTarget.textContent));
		((lastSelected + 3) < totalPages)&& setLastSelected(Number(e.currentTarget.textContent))
		dispatch(setCurrentPage({ ...request, page: Number(e.currentTarget.textContent) }));
	};

	return (
		<StyledContainer>
			<StyledButtonNav onClick={handlePagePrevious} isActive= {selectedPage > 1}>Previous</StyledButtonNav>
						<StyledButton onClick={handlePage} isActive={selectedPage === lastSelected} >
							{lastSelected}
						</StyledButton>
						{(lastSelected + 1 )<= totalPages && 
						<StyledButton
							onClick={handlePage}
							isActive={selectedPage === lastSelected + 1}
						>
							{lastSelected + 1}
						</StyledButton>

						}
						{(lastSelected + 2 )<= totalPages &&
						<StyledButton
							onClick={handlePage}
							isActive={selectedPage === lastSelected + 2}
						>
							{lastSelected + 2}
						</StyledButton>
}
			<StyledButtonNav onClick={handlePageNext} isActive= {selectedPage < totalPages}>Next</StyledButtonNav>
			<StyledTotalPage>Total pages: {totalPages}</StyledTotalPage>
		</StyledContainer>
	);
};

export default Pagination;
