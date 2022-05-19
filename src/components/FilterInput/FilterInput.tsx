import { Path, UseFormRegister } from 'react-hook-form';
import { IFilterRequest } from '../../types/types';
import { StyledInput, StyledInputItem, StyledLabel } from './styles';

type IFilterInputProps = {
	keyData: Path<IFilterRequest>;
	inputName: string;
	inputType: string;
	value?: string;
	placeholder?: string;
	register: UseFormRegister<IFilterRequest>;
};

const FilterInput = ({
	keyData,
	inputName,
	inputType,
	placeholder,
	register,
}: IFilterInputProps) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput type={inputType} placeholder={placeholder} {...register(keyData)} />
		</StyledInputItem>
	);
};
export default FilterInput;
