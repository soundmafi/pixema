import { Path, UseFormRegister } from 'react-hook-form';
import { IInputData } from '../../types/types';
import { StyledInput, StyledInputItem, StyledLabel } from './styles';

type InputProps = {
	keyData: Path<IInputData>
	inputName:string
	inputType: string;
	value?: string;
	placeholder?: string;
	register: UseFormRegister<IInputData>;
	required: boolean;
};

const InputSetting = ({keyData, inputName, 
	inputType,
	placeholder,
	register,
	required,
}: InputProps) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput 
				type={inputType}
				placeholder={placeholder}
				{...register(keyData, { required })}
			/>
		</StyledInputItem>
	);
};

export default InputSetting;
