import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import { IFilterRequest, IInputData } from '../../types/types';
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
import { setUser } from '../../store/slices/userReducer';
import SettingInput from '../SettingInput/SettingInput';

const Settings = () => {
	const { register, handleSubmit } = useForm<IInputData>();
	const user = useAppSelector(getUser);
	const auth = getAuth();
	const dispatch = useAppDispatch();

	const [currentName, setCurrentName] = useState(user.user.displayName);
	const [currentEmail, setCurrentEmail] = useState(user.user.email);

	const [isDisable, setIsDisable] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		if (data.name !== '') {
			console.log('да!');

			onAuthStateChanged(auth, (user) => {
				if (user) {
					// dispatch(setUser({...user, name: data.name}))
					updateProfile(user, {
						displayName: data.name,
					})
						.then(() => {
							setIsDisable(true);
							setTimeout(() => {
								setIsDisable(false);
							}, 2000);
							dispatch(setUser({ user, name: data.name }));
							console.log('всё выполнилось');
						})
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
		} else {
			console.log('нет');
		}
	};

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentName(e.target.value);
	};
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentEmail(e.target.value);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			{isDisable && <ModalSuccess />}
			<StyledBlockContainer>
				<StyledTitle>Profile</StyledTitle>

				<StyledContainer>
					<SettingInput
						inputName="Name"
						inputType="text"
						placeholder="Your Name"
						keyData="name"
						register={register}
						handleValue={handleName}
						value={currentName}
					/>
					<SettingInput
						inputName="Email"
						inputType="mail"
						placeholder="Your email"
						keyData="email"
						register={register}
						handleValue={handleEmail}
						value={currentEmail}
					/>
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer></StyledBlockContainer>

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
