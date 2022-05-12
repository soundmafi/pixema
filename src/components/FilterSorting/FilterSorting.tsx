import { ChangeEvent, useState } from 'react';
import { StyledInput, StyledLabel, StyledSortingContainer } from './styles';

export const FilterSorting = () => {
	const [typeSort, setTypeSort] = useState<string>('Year');

	const isSelected = (value: string): boolean => typeSort === value;
	const handleTypeSort = (e: ChangeEvent<HTMLInputElement>): void => {
		setTypeSort(e.currentTarget.value);
	};

	return (
		<StyledSortingContainer>
			<StyledLabel htmlFor="Rating" typeSort={typeSort}>
				Rating
			</StyledLabel>
			<StyledInput
				type="radio"
				name="sortByRating"
				value="Rating"
				checked={isSelected('Rating')}
				onChange={handleTypeSort}
				id="Rating"
			/>
			<StyledLabel htmlFor="Year" typeSort={typeSort}>
				Year
			</StyledLabel>
			<StyledInput
				type="radio"
				name="sortByYear"
				value="Year"
				checked={isSelected('Year')}
				onChange={handleTypeSort}
				id="Year"
			/>
		</StyledSortingContainer>
	);
};
