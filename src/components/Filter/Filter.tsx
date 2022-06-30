import React, { ChangeEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { filterState } from '../../store/selectors/filterSelectors';
import { getRequestSearch } from '../../store/selectors/searchRequestSelectors';
import { setStateFilterClose } from '../../store/slices/filterStateReducer';
import { setRequest } from '../../store/slices/requestReducer';
import { IFilterRequest } from '../../types/types';
import FilterInput from '../FilterInput/FilterInput';
import {
	CloseIcon,
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
	const request = useAppSelector(getRequestSearch);

	const dispatch = useAppDispatch();
	const { isDisable } = useAppSelector(filterState);

	// state for selected type (Movie/Series/Episode)
	const [currentSearchType, setCurrentSearchType] = useState<string>('Movie');
	const [currentSearchValue, setCurrentSearchValue] = useState<string>(request.title);
	const [currentSearchYear, setCurrentSearchYear] = useState<string>(request.year);

	const isSelected = (value: string): boolean => currentSearchType === value;
	const handleTypeSort = (e: ChangeEvent<HTMLInputElement>): void => {
		setCurrentSearchType(e.currentTarget.value);
	};

	useEffect(() => {
		setCurrentSearchValue(request.title);
	}, [request.title]);

	// handle inputs value and write new request
	const onSubmit: SubmitHandler<IFilterRequest> = () => {
		const newRequest = {
			title: currentSearchValue,
			year: currentSearchYear,
			type: currentSearchType,
			page: 1,
		};
		
		if (newRequest.title !== '') {
			dispatch(setRequest(newRequest));
		}
	};

	//	close filter btn
	const handleClose = () => {
		dispatch(setStateFilterClose());
	};

	const handleTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSearchValue(e.target.value);
	};

	const handleCurrentSearchYear = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSearchYear(e.target.value);
	};

	const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.textContent === 'Clear filter') {
			setCurrentSearchYear('');
			setCurrentSearchValue('');
		}
	};

	const showResutls = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.textContent === 'Show results') {
		}
	};

	return (
		<>
			<StyledFilter isDisable={isDisable}>
				<StyledButtonClose onClick={() => handleClose()}>
					<CloseIcon />
				</StyledButtonClose>
				<StyledTitleFilter>Filter</StyledTitleFilter>
				<StyledLine />
				<StyledFilterForm onSubmit={handleSubmit(onSubmit)}>
					<FilterInput
						keyData="title"
						value={currentSearchValue}
						inputName="Full or short movie name"
						inputType={'text'}
						placeholder={'Your text'}
						register={register}
						handleValue={handleTitleValue}
					/>
					<FilterInput
						keyData="year"
						inputName="Year"
						inputType="text"
						placeholder="Movie year"
						register={register}
						value={currentSearchYear}
						handleValue={handleCurrentSearchYear}
					/>

					<StyledSortingContainer>
						<StyledLabel htmlFor="Movie" typeMovie={currentSearchType}>
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
						<StyledLabel htmlFor="Series" typeMovie={currentSearchType}>
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
						<StyledLabel htmlFor="Episode" typeMovie={currentSearchType}>
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
						<StyledClearFilter type="button" id="clear" onClick={(e) => clearForm(e)}>
							Clear filter
						</StyledClearFilter>
						<StyledShowResult type="submit" id="show" onClick={(e) => showResutls(e)}>
							Show results
						</StyledShowResult>
					</StyledButtonsContainer>
				</StyledFilterForm>
			</StyledFilter>
		</>
	);
};

export default Filter;
