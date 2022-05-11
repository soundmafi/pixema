import { SubmitHandler, useForm } from 'react-hook-form';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';
import {
	StyledButton,
	StyledResetForm,
	StyledTitle,
} from './styles';

const ResetPassword = () => {
	const { register, handleSubmit } = useForm<IInputData>();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		console.log(data.email);
	};
	return (
		<StyledResetForm onSubmit={handleSubmit(onSubmit)}>
			<StyledTitle>Reset Password</StyledTitle>
			<Input inputName="Email" inputType="email" placeholder="Your email" keyData="email" register={register}
				required/>	
			<StyledButton>Reset</StyledButton>
		</StyledResetForm>
	);
};

export default ResetPassword;
