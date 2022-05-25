import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { StyledButtonOpen, StyledLabel, StyledSearch } from './styles';
import { FilterOpenIcon } from '../../assets/Icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { movieApi } from '../../services/movieApi';
import { setMovies } from '../../store/slices/moviesReducer';
import { transformMovies } from '../../services/mappers/movies';
import { RootStore } from '../../store/store';
import { setRequest } from '../../store/slices/requestReducer';

const Search = () => {
	const dispatch = useAppDispatch();
	const { register } = useForm();
	const request = useAppSelector(({ requestSearch }: RootStore) => requestSearch);

	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const newRequest = {
			title: e.target.value,
			year: '',
			type: '',
			page: 1,
		};

		const delayRequest = setTimeout(() => {
			dispatch(setRequest(newRequest));
		}, 2000);
		return () => clearTimeout(delayRequest);
	};

	useEffect(() => {
		movieApi.getMovieTitleSearch(request).then((movies) => {
			dispatch(setMovies(transformMovies(movies)));
		});
	}, [request]);

	const handleOpen = (e: MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		dispatch(setStateFilterOpen());
	};

	return (
		<StyledLabel>
			<StyledSearch placeholder="Search" {...register('love')} onChange={handlerSearch} />
			<StyledButtonOpen onClick={handleOpen}>
				<FilterOpenIcon width="48" height="32" viewBox="0 0 16 14" />
			</StyledButtonOpen>
		</StyledLabel>
	);
};

export default Search;
