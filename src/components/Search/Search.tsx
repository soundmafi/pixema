import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledLabel, StyledSearch, StyledSearchButton } from './styles';
import { SearchIcon } from '../../assets/Icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { movieApi } from '../../services/movieApi';
import { setMovies } from '../../store/slices/moviesReducer';
import { transformMovies } from '../../services/mappers/movies';
import { RootStore } from '../../store/store';
import { setRequest } from '../../store/slices/requestReducer';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Search = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register } = useForm();
	const request = useAppSelector(({ requestSearch }: RootStore) => requestSearch);
	const [newRequest, setNewRequest] = useState(request);

	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== '') {
			const newRequest = {
				title: e.target.value,
				year: '',
				type: '',
				page: 1,
			};
			setNewRequest(newRequest);
		}
	};

	useEffect(() => {
		movieApi.getMovieTitleSearch(request).then((movies) => {
			dispatch(setMovies(transformMovies(movies)));
		});
	}, [newRequest]);

	const searchButton = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault();

		dispatch(setRequest(newRequest));
		navigate(routes.HOME);
	};

	return (
		<StyledLabel>
			<StyledSearch placeholder="Search" {...register('love')} onChange={handlerSearch} />
			<StyledSearchButton onClick={searchButton}>
				<SearchIcon />
			</StyledSearchButton>
		</StyledLabel>
	);
};

export default Search;
