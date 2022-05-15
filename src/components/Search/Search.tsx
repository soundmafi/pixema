import { ChangeEvent, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setStateFilterOpen } from '../../store/slices/filterStateReducer';
import { StyledButtonOpen, StyledIcon, StyledLabel, StyledSearch } from './styles';

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
				<StyledIcon
					width="48"
					height="32"
					viewBox="0 0 16 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L15 1M6 7H15M10 13H15"
						stroke="#AFB2B6"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</StyledIcon>
			</StyledButtonOpen>
		</StyledLabel>
	);
};

export default Search;
