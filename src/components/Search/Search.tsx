import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledLabel, StyledSearch, StyledSearchButton } from './styles';
import { SearchIcon } from '../../assets/Icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setRequest } from '../../store/slices/requestReducer';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { fetchMovies } from '../../store/slices/moviesReducer';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';

const Search = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register } = useForm();
	const request = useAppSelector(getRequestSearch);
	const [newRequest, setNewRequest] = useState(request);

	const handlerSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== '') {
			const bodyRequest = {
				title: e.target.value,
				year: '',
				type: '',
				page: 1,
			};
			setNewRequest(bodyRequest);
		}
	};

	useEffect(() => {
		if (request.title !== '') {
			dispatch(fetchMovies(request));
		}
	}, [request.title, request.type, request.year, request.page]);

	const searchButton = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault();
		dispatch(setRequest(newRequest));
		navigate(routes.HOME);
	};

	return (
		<StyledLabel>
			<StyledSearch placeholder="Search" {...register(' ')} onChange={handlerSearchValue} />
			<StyledSearchButton onClick={searchButton}>
				<SearchIcon />
			</StyledSearchButton>
		</StyledLabel>
	);
};

export default Search;
