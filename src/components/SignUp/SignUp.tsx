import { SubmitHandler, useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import {
	StyledButton,
	StyledSignUpForm,
	StyledText,
	StyledTextSignUp,
	StyledTitle,
} from './styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userReducer';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';
import { useAppDispatch } from '../../store/hooks/hooks';

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<IInputData>();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				dispatch(setUser(userCredential.user.email));
				navigate(routes.SIGN_IN);
			})
			.catch(console.error);
	};

	return (
		<StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
			<StyledTitle>Sign Up</StyledTitle>
			<Input
				keyData="name"
				inputName="Name"
				inputType="text"
				placeholder="Your Name"
				register={register}
				required
			/>
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
			<Input
				keyData="password_confirm"
				inputName="Confirm password"
				inputType="password"
				placeholder="Confirm password"
				register={register}
				required
			/>
			<StyledButton>Sign up</StyledButton>
			<StyledText>
				Already have an account?{' '}
				<Link to={routes.SIGN_IN}>
					<StyledTextSignUp>Sign In</StyledTextSignUp>
				</Link>
			</StyledText>
		</StyledSignUpForm>
	);
};

export default SignUp;
