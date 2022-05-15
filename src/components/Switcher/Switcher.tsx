import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDark, setWhite } from '../../store/slices/themeReducer';
import { RootStore } from '../../store/store';
import { StyledInput, StyledInputLabel, StyledSlider } from './styles';

const Switch = () => {
	const dispatch = useDispatch();
	const {themeType} = useSelector(({ themeType }: RootStore) => themeType)
	const [state, setState] = useState(false);



	const checkboxHandle = (e: ChangeEvent<HTMLInputElement>) => { 

		console.log(e.target.checked);
		
		(e.target.checked)? dispatch(setDark()): dispatch(setWhite())
	};

	// const [theme, setTheme] = useState('darkTheme');
	// document.documentElement.setAttribute('theme', theme);

	// const toggleTheme = (isTrue: boolean) => {
	// 	isTrue ? setTheme('lightTheme') : setTheme('darkTheme');
	// };
	
	// toggleTheme(state);

	return (
		<StyledInputLabel>
			<StyledInput type="checkbox" onChange={checkboxHandle} />
			<StyledSlider themeType={themeType} />
		</StyledInputLabel>
	);
};

export default Switch;
