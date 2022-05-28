import { SubmitHandler, useForm } from 'react-hook-form';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';
import { StyledButton, StyledResetForm, StyledTitle } from './styles';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';


const ResetPassword = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		sendPasswordResetEmail(auth, data.email)
			.then(() => {
				// Password reset email sent!
				// ..
				console.log('письмо отправлено');
				navigate(routes.SIGN_IN);
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	return (
		<StyledResetForm onSubmit={handleSubmit(onSubmit)}>
			<StyledTitle>Reset Password</StyledTitle>
			<Input
				inputName="Email"
				inputType="email"
				placeholder="Your email"
				keyData="email"
				register={register}
				required
			/>
			<StyledButton>Reset</StyledButton>
		</StyledResetForm>
	);
};

export default ResetPassword;
