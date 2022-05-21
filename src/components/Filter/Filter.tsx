import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { setStateFilterClose } from '../../store/slices/filterStateReducer';
import { setRequest } from '../../store/slices/requestReducer';
import { RootStore } from '../../store/store';
import { IFilterRequest } from '../../types/types';
import { ButtonCloseIcon } from '../ButtonClose/ButtonCloseIcon';
import FilterInput from '../FilterInput/FilterInput';
import {
	StyledButtonClose,
	StyledButtonsContainer,
	StyledClearFilter,
	StyledFilter,
	StyledFilterForm,
	StyledInput,
	StyledLabel,
	StyledLine,
	StyledShowResult,
	StyledSortingContainer,
	StyledTitleFilter,
} from './styles';

const Filter = () => {
	const { register, handleSubmit } = useForm<IFilterRequest>();
	const dispatch = useDispatch();
	const { isDisable } = useAppSelector(({ filterState }: RootStore) => filterState);

	// state for selected type (Movie/Series/Episode)
	const [typeMovie, setTypeMovie] = useState<string>('Movie');
	const isSelected = (value: string): boolean => typeMovie === value;
	const handleTypeSort = (e: ChangeEvent<HTMLInputElement>): void => {
		setTypeMovie(e.currentTarget.value);
	};

	// handle inputs value and write new request
	const onSubmit: SubmitHandler<IFilterRequest> = ({ title, year }) => {
		const newRequest = {
			title: title,
			year: year,
			type: typeMovie,
		};
		dispatch(setRequest(newRequest));
	};

	//	close filter btn
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
				<StyledFilterForm onSubmit={handleSubmit(onSubmit)}>
					<FilterInput
						keyData="title"
						inputName="Full or short movie name"
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

					<StyledSortingContainer>
						<StyledLabel htmlFor="Movie" typeMovie={typeMovie}>
							Movie
						</StyledLabel>
						<StyledInput
							type="radio"
							name="sortByMovie"
							value="Movie"
							checked={isSelected('Movie')}
							onChange={handleTypeSort}
							id="Movie"
						/>
						<StyledLabel htmlFor="Series" typeMovie={typeMovie}>
							Series
						</StyledLabel>
						<StyledInput
							type="radio"
							name="sortBySeries"
							value="Series"
							checked={isSelected('Series')}
							onChange={handleTypeSort}
							id="Series"
						/>
						<StyledLabel htmlFor="Episode" typeMovie={typeMovie}>
							Episode
						</StyledLabel>
						<StyledInput
							type="radio"
							name="sortByEpisode"
							value="Episode"
							checked={isSelected('Episode')}
							onChange={handleTypeSort}
							id="Episode"
						/>
					</StyledSortingContainer>

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
	/* <StyledTitleParameters>Full or short movie name</StyledTitleParameters> */
}
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
