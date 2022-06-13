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
import { setUser } from '../../store/slices/userReducer';
import { useAppDispatch } from '../../store/hooks/hooks';
import { ModalText } from '../../types/modalText';
import { useState } from 'react';
import ModalBase from '../ModalBase/ModalBase';

const SignIn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();
	const [textErrorState, setTexErrorState] = useState<ModalText>(ModalText.SUCCES_SIGN_IN);
	const [isDisableError, setIsDisableError] = useState(false);

	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/wrong-password') {
			setTexErrorState(ModalText.ERROR_PASSWORD);
		}
		if (responseText === 'auth/user-not-found') {
			setTexErrorState(ModalText.ERROR_EMAIL_NOT_FOUND);
		}
	};

	const onSubmit: SubmitHandler<IInputData> = ({ email, password }) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({ user }));
				navigate(routes.HOME);
			})
			.catch((error) => {
				getErrorText(error.code);
				setIsDisableError(true);
			});
	};
	return (
		<StyledSignForm onSubmit={handleSubmit(onSubmit)}>
			<StyledTitle>Sign In</StyledTitle>
			{isDisableError && <ModalBase message={textErrorState} />}
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
			<Link to={routes.RESET_PASSWORD}>Forgot password?</Link>
			<StyledButton type="submit">Sign in</StyledButton>
			<StyledText>
				Don’t have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
			</StyledText>
		</StyledSignForm>
	);
};

export default SignIn;
