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
	handleTitleValue?: (e:React.ChangeEvent<HTMLInputElement>)=>void 
};

const FilterInput = ({
	keyData,
	inputName,
	inputType,
	placeholder,
	register,
	value,
	handleTitleValue
}: IFilterInputProps) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput type={inputType} placeholder={placeholder} {...register(keyData)} value={value} onChange={handleTitleValue}/>
		</StyledInputItem>
	);
};
export default FilterInput;
