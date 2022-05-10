import { ChangeEvent, useState } from 'react';
import { StyledInput, StyledInputLabel, StyledSlider } from './styles';

const Switch = () => {
	const [state, setState] = useState(false);

	const checkboxHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.checked);
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
			<StyledSlider state={state} />
		</StyledInputLabel>
	);
};

export default Switch;
