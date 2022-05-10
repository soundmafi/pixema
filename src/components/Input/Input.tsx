import { StyledInput, StyledInputItem, StyledLabel } from './styles';
interface IInput {
	inputName: string;
	inputType: string;
	value?: string;
	placeholder?: string;
}

const InputSetting = ({ inputName, inputType, placeholder, value }: IInput) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput name={inputName} type={inputType} placeholder={placeholder} />
		</StyledInputItem>
	);
};

export default InputSetting;
