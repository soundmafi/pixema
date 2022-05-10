import { ChangeEvent, useState } from 'react';
import { StyledInput, StyledInputLabel, StyledSlider } from './styles';

const Switch = () => {
	const [state, setState] = useState(false);

	const checkboxHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.checked);
	};

	return (
		<StyledInputLabel>
			<StyledInput type="checkbox" onChange={checkboxHandle} />
			<StyledSlider state={state} />
		</StyledInputLabel>
	);
};

export default Switch;
