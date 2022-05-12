import { StyledInput, StyledInputItem, StyledLabel } from './styles';

interface IFilterInput{
    inputName: string,
    inputType: string,
    placeholder: string
}

export const FilterInput = ({ inputName, inputType, placeholder }:IFilterInput) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}></StyledLabel>
			<StyledInput name={inputName} type={inputType} placeholder={placeholder} />
		</StyledInputItem>
	);
};
