import { Path, UseFormRegister } from 'react-hook-form';
import { IInputData } from '../../types/types';
import { StyledInput, StyledInputItem, StyledLabel } from './styles';

type ISettingInputProps = {
	keyData: Path<IInputData>;
	inputName: string;
	inputType: string;
	value?: string;
	placeholder?: string;
	register: UseFormRegister<IInputData>;
	handleValue?: (e:React.ChangeEvent<HTMLInputElement>)=>void 
};

const SettingInput = ({
	keyData,
	inputName,
	inputType,
	placeholder,
	register,
	value,
	handleValue
}: ISettingInputProps) => {
	return (
		<StyledInputItem>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput type={inputType} placeholder={placeholder} {...register(keyData)} value={value} onChange={handleValue}/>
		</StyledInputItem>
	);
};
export default SettingInput;
