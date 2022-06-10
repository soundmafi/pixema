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
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from 'firebase/auth';
import { setUser } from '../../store/slices/userReducer';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';
import { useAppDispatch } from '../../store/hooks/hooks';
import { useState } from 'react';
import ModalBase from '../ModalBase/ModalBase';
import { ModalText } from '../../types/modalText';
import styled from 'styled-components';

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<IInputData>();

	const [isDisable, setIsDisable] = useState(false);
	const [isDisableError, setIsDisableError] = useState(false);
	const [textErrorState, setTexErrorState] = useState<ModalText>(ModalText.SUCCES_SIGN_IN);

	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/email-already-in-use') {
			setTexErrorState(ModalText.ERROR_SIGN_UP);
		}
	};

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				updateProfile(user, {
					displayName: data.name,
					photoURL: 'https://upload.wikimedia.org/wikipedia/ru/4/42/Kenny-sp.jpg',
				})
					.then(() => {
						setIsDisable(true);
						dispatch(setUser(user));
						setTimeout(() => {
							setIsDisable(false);
							navigate(routes.SIGN_IN);
						}, 3000);
					})
					.catch((error) => {
						// console.log(error);
						// setIsDisableError(true);
						// setTimeout(() => {
						// 	setIsDisableError(false);
						// }, 2000);
						// An error occurred
						// ...
					});

				// sendEmailVerification(user)
				// 	.then(() => {

				// 	  // Email verification sent!
				// 	  // ...

				// 	  console.log('письмо отпрвлено');

				// 	})
				// 	.catch((error) => {
				// 		console.log(error.message);
				// 		setIsDisableError(true);

				// 		setTimeout(() => {
				// 			setIsDisableError(false);

				// 		}, 2000);

				// 		// An error occurred
				// 		// ...
				// 	});
			})
			.catch((error) => {
				setIsDisableError(true);
				getErrorText(error.code);
			});
	};

	return (
		<>
			{isDisable ? (
				<ModalBase message={ModalText.SUCCES_SIGN_UP} />
			) : (
				<StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
					<StyledTitle>Sign Up</StyledTitle>
					{isDisableError && <ModalBase message={textErrorState} />}
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
			)}
		</>
	);
};

export default SignUp;
