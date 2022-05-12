import { useState } from 'react';
import { IOption } from '../../types/types';
import FilterCountrySelect from '../FilterCountrySelect/FilterCountrySelect';
import { FilterInput } from '../FilterInput/FilterInput';
import { FilterSorting } from '../FilterSorting/FilterSorting';
import {
	StyledButtonClose,
	StyledButtonsContainer,
	StyledClearFilter,
	StyledContainer,
	StyledFilter,
	StyledLine,
	StyledShowResult,
	StyledTitleFilter,
	StyledTitleParameters,
} from './styles';

const Filter = () => {
	const [country, setCountry] = useState('Belarus');

	const handleSelect = (option: IOption | null): void => {
		if (option) {
			setCountry(option.value);
		}
	};
	console.log(country);

	return (
		<StyledFilter>
			<StyledButtonClose>
				<svg
					width="20"
					height="20"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.6569 10.2429L7.41421 6.00023L11.6569 1.75759C12.0472 1.36727 12.0472 0.733701 11.6569 0.343378C11.2665 -0.0469454 10.633 -0.0469453 10.2426 0.343378L6 4.58602L1.75736 0.343378C1.36704 -0.0469453 0.733469 -0.0469454 0.343146 0.343378C-0.0471771 0.733701 -0.0471771 1.36727 0.343146 1.75759L4.58579 6.00023L0.343146 10.2429C-0.0478838 10.6339 -0.0471771 11.2668 0.343146 11.6571C0.733469 12.0474 1.36633 12.0481 1.75736 11.6571L6 7.41445L10.2426 11.6571C10.6337 12.0481 11.2665 12.0474 11.6569 11.6571C12.0472 11.2668 12.0479 10.6339 11.6569 10.2429Z"
						fill="#AFB2B6"
					/>
				</svg>
			</StyledButtonClose>

			<StyledTitleFilter>Filter</StyledTitleFilter>
			<StyledTitleParameters>Sort by</StyledTitleParameters>
			<FilterSorting />
			<StyledLine />
			<StyledTitleParameters>Full or short movie name</StyledTitleParameters>
			<FilterInput inputName={'MovieName'} inputType={'text'} placeholder={'Your text'} />
			<StyledTitleParameters>Genre</StyledTitleParameters>
			<FilterInput inputName={'Genre'} inputType={'text'} placeholder={'Genre text'} />
			<StyledTitleParameters>Year</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'YearFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'YearTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer>
			<StyledTitleParameters>Rating</StyledTitleParameters>
			<StyledContainer>
				<FilterInput inputName={'RatingFrom'} inputType={'text'} placeholder={'From'} />
				<FilterInput inputName={'RatingTo'} inputType={'text'} placeholder={'To'} />
			</StyledContainer>

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
