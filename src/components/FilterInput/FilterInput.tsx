import { RecordWithTtl } from 'dns';
import { ReactText } from 'react';
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
	handleValue?: (e:React.ChangeEvent<HTMLInputElement>)=>void 
};

const FilterInput = ({
	keyData,
	inputName,
	inputType,
	placeholder,
	register,
	value,
	handleValue
}: IFilterInputProps) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput type={inputType} placeholder={placeholder} {...register(keyData)} value={value} onChange={handleValue}/>
		</StyledInputItem>
	);
};
export default FilterInput;
