import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

import {
	StyledButton,
	StyledRestorePasword,
	StyledSignForm,
	StyledText,
	StyledTextSignUp,
	StyledTitle,
} from './styles';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';

const SignIn = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		console.log(data);

		const auth = getAuth();
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				navigate(routes.HOME);
			})
			.catch((error) => {
				console.log('Не правильный логин или пароль');
			});
	};
	return (
		<StyledSignForm onSubmit={handleSubmit(onSubmit)}>
			<StyledTitle>Sign In</StyledTitle>
			<Input
				keyData="email"
				inputName="Email"
				inputType="email"
				placeholder="Your email"
				register={register}
				required
			/>
			<Input
				keyData="password"
				inputName="Password"
				inputType="password"
				placeholder="Your pasword"
				register={register}
				required
			/>
			<StyledRestorePasword>
				<Link to={routes.RESET_PASSWORD}>Forgot password?</Link>
			</StyledRestorePasword>
			<StyledButton>Sign in</StyledButton>
			<StyledText>
				Don’t have an account?{' '}
				<Link to={routes.SIGN_UP}>
					<StyledTextSignUp>Sign Up</StyledTextSignUp>
				</Link>
			</StyledText>
		</StyledSignForm>
	);
};

export default SignIn;
