import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateFilterClose } from '../../store/slices/filterStateReducer';
import { RootStore } from '../../store/store';
import { IOption } from '../../types/types';
import { ButtonCloseIcon } from '../ButtonClose/ButtonCloseIcon';
import FilterCountrySelect from '../FilterCountrySelect/FilterCountrySelect';
import { FilterInput } from '../FilterInput/FilterInput';
import { FilterSorting } from '../FilterSorting/FilterSorting';
import {
	StyledButtonClose,
	StyledButtonsContainer,
	StyledClearFilter,
	StyledFilter,
	StyledLine,
	StyledShowResult,
	StyledTitleFilter,
	StyledTitleParameters,
} from './styles';

const Filter = () => {
	const dispatch = useDispatch();
	const { isDisable } = useSelector(({ filterState }: RootStore) => filterState);
	const [country, setCountry] = useState('Belarus');

	const handleSelect = (option: IOption | null): void => {
		if (option) {
			setCountry(option.value);
		}
	};

	const handleClose = () => {
		dispatch(setStateFilterClose());
	};

	return (
		<StyledFilter isDisable={isDisable}>
			<StyledButtonClose onClick={handleClose}>
				<ButtonCloseIcon />
			</StyledButtonClose>
			<StyledTitleFilter>Filter</StyledTitleFilter>
			<StyledTitleParameters>Sort by</StyledTitleParameters>
			<FilterSorting />
			<StyledLine />
			<StyledTitleParameters>Full or short movie name</StyledTitleParameters>
			<FilterInput inputName={'MovieName'} inputType={'text'} placeholder={'Your text'} />
			<StyledTitleParameters>Genre</StyledTitleParameters>
			<FilterInput inputName={'Genre'} inputType={'text'} placeholder={'Genre text'} />
			{/* <StyledTitleParameters>Year</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'YearFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'YearTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer>
			<StyledTitleParameters>Rating</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'RatingFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'RatingTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer> */}

			<StyledTitleParameters>Country</StyledTitleParameters>
			<FilterCountrySelect handleSelect={handleSelect} value={country} name="Country" />
			<StyledButtonsContainer>
				<StyledClearFilter>Clear filter</StyledClearFilter>
				<StyledShowResult>Show results</StyledShowResult>
			</StyledButtonsContainer>
		</StyledFilter>
	);
};

export default Filter;
