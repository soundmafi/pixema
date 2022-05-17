import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDark, setWhite } from '../../store/slices/themeReducer';
import { RootStore } from '../../store/store';
import { StyledInput, StyledInputLabel, StyledSlider } from './styles';

const Switch = () => {
	const dispatch = useDispatch();
	const { themeType } = useSelector(({ themeType }: RootStore) => themeType);

	const checkboxHandle = (e: ChangeEvent<HTMLInputElement>) => {
		
		e.target.checked ? dispatch(setDark()) : dispatch(setWhite());
	};

	return (
		<StyledInputLabel>
			<StyledInput type="checkbox" onChange={checkboxHandle} />
			<StyledSlider themeType={themeType} />
		</StyledInputLabel>
	);
};

export default Switch;
