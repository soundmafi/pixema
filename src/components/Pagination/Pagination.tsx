import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import useWindowSize, { Size } from '../../store/hooks/useWindowSize';
import { getTotalPages } from '../../store/selectors/moviesSelector';
import {
	getRequestSearch,
	getRequestSearchPage,
} from '../../store/selectors/searchRequestSelectors';
import { setStatusLoading } from '../../store/slices/moviesReducer';
import { setRequest } from '../../store/slices/requestReducer';
import {
	NextPage,
	PreviousPage,
	StyledButton,
	StyledButtonNav,
	StyledContainer,
	StyledTotalPage,
} from './styles';

const Pagination = () => {
	const size: Size = useWindowSize();
	const currentPage = useAppSelector(getRequestSearchPage);
	const totalPages = useAppSelector(getTotalPages);
	const request = useAppSelector(getRequestSearch);
	const dispatch = useAppDispatch();

	const handlePagePrevious = () => {
		if (currentPage > 1) {
			dispatch(setStatusLoading());
			dispatch(setRequest({ ...request, page: currentPage - 1 }));
		}
	};

	const handlePageNext = () => {
		if (currentPage < totalPages) {
			dispatch(setStatusLoading());
			dispatch(setRequest({ ...request, page: currentPage + 1 }));
		}
	};

	return (
		<StyledContainer>
			<StyledButtonNav onClick={handlePagePrevious} isActive={currentPage > 1}>
				{size.width > 769 ? 'Previous' : <PreviousPage />}
			</StyledButtonNav>
			<StyledButton isActive={currentPage > 1}>{currentPage}</StyledButton>

			<StyledButtonNav onClick={handlePageNext} isActive={currentPage < totalPages}>
				{size.width > 769 ? 'Next' : <NextPage />}
			</StyledButtonNav>
			<StyledTotalPage>Pages: {totalPages}</StyledTotalPage>
		</StyledContainer>
	);
};

export default Pagination;
