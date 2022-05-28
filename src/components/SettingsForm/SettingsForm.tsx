import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import { IInputData } from '../../types/types';
import Input from '../Input/Input';
import Switch from '../Switcher/Switcher';
import {
	StyledBlockContainer,
	StyledButtonCancel,
	StyledButtonSave,
	StyledButtonsContainer,
	StyledContainer,
	StyledForm,
	StyledText,
	StyledThemeName,
	StyledTitle,
} from './styles';

import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import ModalSuccess from '../Modal/ModalSuccess';

const Settings = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const user = useAppSelector(getUser);
	const auth = getAuth();
	const dispatch = useAppDispatch();

	const [currentUser, setCurrentUser] = useState(user)
	const [isDisable, setIsDisable] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				updateProfile(user, {
					displayName: data.name,
				})
				.then(()=>{
					setIsDisable(true);
						setTimeout(() => {
							setIsDisable(false);
						}, 2000);
					
					console.log('всё выполнилось')}
				)
				.catch((error) => {
					setIsDisable(true);
						setTimeout(() => {
							setIsDisable(false);
						}, 2000);
					// An error occurred
					// ...
				});
			} else {
				// User is signed out
				// ...
			}
		});
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			{isDisable && <ModalSuccess/>}
			<StyledBlockContainer>
				<StyledTitle>Profile</StyledTitle>

				<StyledContainer>
					<Input
						inputName="Name"
						inputType="text"
						placeholder="Your Name"
						keyData="name"
						register={register}
					/>
					<Input
						inputName="Email"
						inputType="mail"
						placeholder="Your email"
						keyData="email"
						register={register}
					/>
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer>
			</StyledBlockContainer>

			{/* <StyledBlockContainer>
				<StyledTitle>Password</StyledTitle>

				<StyledContainer>
					<Input
						inputName="Password"
						inputType="password"
						placeholder="Your password"
						keyData="password"
						register={register}
						required
					/>
					<StyledPasswordContainer>
						<Input
							inputName="New password"
							inputType="password"
							placeholder="New password"
							keyData="password_new"
							register={register}
							required
						/>
						<Input
							inputName="Confirm password"
							inputType="password"
							placeholder="Confirm password"
							keyData="password_confirm"
							register={register}
							required
						/>
					</StyledPasswordContainer>
				</StyledContainer>
			</StyledBlockContainer> */}

			<StyledBlockContainer>
				<StyledTitle>Color Mode</StyledTitle>

				<StyledContainer>
					<div>
						<StyledThemeName>Dark</StyledThemeName>
						<StyledText>Use dark thema</StyledText>
					</div>

					<Switch />
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer>
				<StyledButtonsContainer>
					<StyledButtonCancel>Cancel</StyledButtonCancel>
					<StyledButtonSave>Save</StyledButtonSave>
				</StyledButtonsContainer>
			</StyledBlockContainer>
		</StyledForm>
	);
};

export default Settings;
