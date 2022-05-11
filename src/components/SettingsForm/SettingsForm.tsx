import { SubmitHandler, useForm } from 'react-hook-form';
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
	StyledPasswordContainer,
	StyledText,
	StyledThemeName,
	StyledTitle,
} from './styles';

const Settings = () => {
	const { register, handleSubmit } = useForm<IInputData>();

	const onSubmit: SubmitHandler<IInputData> = (data) => {
		console.log(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledBlockContainer>
				<StyledTitle>Profile</StyledTitle>

				<StyledContainer>
					<Input
						inputName="Name"
						inputType="text"
						placeholder="Your Name"
						keyData="name"
						register={register}
						required
					/>
					<Input
						inputName="Email"
						inputType="mail"
						placeholder="Your email"
						keyData="email"
						register={register}
						required
					/>
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer>
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
			</StyledBlockContainer>

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
