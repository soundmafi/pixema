import { ChangeEvent, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { StyledButtonOpen, StyledLabel, StyledSearch } from './styles';
import { FilterOpenIcon } from '../../assets/Icons';

const Search = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
		return console.log(e.target.value);
	};

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
