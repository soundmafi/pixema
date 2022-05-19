import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { setStateFilterClose } from '../../store/slices/filterStateReducer';
import { setRequest } from '../../store/slices/requestReducer';
import { RootStore } from '../../store/store';
import { IFilterRequest, IInputData, IOption } from '../../types/types';
import { ButtonCloseIcon } from '../ButtonClose/ButtonCloseIcon';
import FilterCountrySelect from '../FilterCountrySelect/FilterCountrySelect';
import FilterInput from '../FilterInput/FilterInput';
// import { FilterInput } from '../FilterInput/FilterInput';
import { FilterSorting } from '../FilterSorting/FilterSorting';
import Input from '../Input/Input';
import {
	StyledButtonClose,
	StyledButtonsContainer,
	StyledClearFilter,
	StyledFilter,
	StyledFilterForm,
	StyledLine,
	StyledShowResult,
	StyledTitleFilter,
	StyledTitleParameters,
} from './styles';

const Filter = () => {
	const dispatch = useDispatch();
	const { isDisable } = useSelector(({ filterState }: RootStore) => filterState);
	const { register, handleSubmit } = useForm<IFilterRequest>();
	const onSubmit: SubmitHandler<IFilterRequest> = ({ title, year }) => {
		console.log(title, year);
		const newRequest = {
			title: title,
			year: year,
			// type: type,
		}
		dispatch(setRequest(newRequest));
	};

	const handleClose = () => {
		dispatch(setStateFilterClose());
	};
	return (
		<>
			<StyledFilter isDisable={isDisable}>
				<StyledButtonClose onClick={() => handleClose()}>
					<ButtonCloseIcon />
				</StyledButtonClose>
				<StyledTitleFilter>Filter</StyledTitleFilter>
				<StyledLine /> 
				{/* <StyledTitleParameters>Sort by</StyledTitleParameters>
				<FilterSorting />
				*/}

				<StyledFilterForm onSubmit={handleSubmit(onSubmit)}>
					<StyledTitleParameters>Full or short movie name</StyledTitleParameters>
					<FilterInput
						keyData="title"
						inputName="Movie name"
						inputType={'text'}
						placeholder={'Your text'}
						register={register}
					/>
					<FilterInput
						keyData="year"
						inputName="Year"
						inputType="text"
						placeholder="Movie year"
						register={register}
					/>
					<StyledButtonsContainer>
						<StyledClearFilter>Clear filter</StyledClearFilter>
						<StyledShowResult>Show results</StyledShowResult>
					</StyledButtonsContainer>
				</StyledFilterForm>
			</StyledFilter>
		</>
	);
};

export default Filter;

{
	/* <StyledTitleParameters>Genre</StyledTitleParameters>
			<FilterInput inputName={'Genre'} inputType={'text'} placeholder={'Genre text'} /> */
}
{
	/* <StyledTitleParameters>Country</StyledTitleParameters> */
}

// const [country, setCountry] = useState('Belarus');

// const handleSelect = (option: IOption | null): void => {
// 	if (option) {
// 		setCountry(option.value);
// 	}

{
	/* <FilterCountrySelect handleSelect={handleSelect} value={country} name="Country" /> */
}
{
	/* <StyledTitleParameters>Year</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'YearFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'YearTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer>
			<StyledTitleParameters>Rating</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'RatingFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'RatingTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer> */
}
