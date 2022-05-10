import { ChangeEvent, useState } from 'react';
import { ISwitch } from '../../types/types';
import { StyledInput, StyledInputLabel, StyledSlider } from './styles';

const Switch = ({toggleTheme}:ISwitch) => {
	const [state, setState] = useState(false);

	const checkboxHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.checked);
	};

	toggleTheme(state);

	return (
		<StyledInputLabel>
			<StyledInput type="checkbox" onChange={checkboxHandle} />
			<StyledSlider state={state} />
		</StyledInputLabel>
	);
};

export default Switch;
