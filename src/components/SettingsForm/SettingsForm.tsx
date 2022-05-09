import InputSetting from '../InputSetting/InputSetting';
import {
	StyledBlockContainer,
	StyledButtonCancel,
	StyledButtonSave,
	StyledButtonsContainer,
	StyledContainer,
	StyledForm,
	StyledPasswordContainer,
	StyledTitle,
} from './styles';

const Settings = () => {
	return (
		<StyledForm>
			<StyledBlockContainer>
				<StyledTitle>Profile</StyledTitle>

				<StyledContainer>
					<InputSetting
						inputName="Name"
						inputType="text"
						value="Artem Lapitsky"
						placeholder="Your Name"
					/>
					<InputSetting
						inputName="Email"
						inputType="mail"
						value="a.lapitsky@gmail.com"
						placeholder="Your email"
					/>
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer>
				<StyledTitle>Password</StyledTitle>

				<StyledContainer>
					<InputSetting
						inputName="Password"
						inputType="password"
						placeholder="Your password"
					/>
					<StyledPasswordContainer>
						<InputSetting
							inputName="New password"
							inputType="password"
							placeholder="New password"
						/>
						<InputSetting
							inputName="Confirm password"
							inputType="password"
							placeholder="Confirm password"
						/>
					</StyledPasswordContainer>
				</StyledContainer>
			</StyledBlockContainer>

			<StyledBlockContainer>
				<StyledTitle>Color Mode</StyledTitle>

				<StyledContainer>
					<InputSetting inputName="Dark Theme" inputType="checkbox" />
					<InputSetting inputName="White Theme" inputType="checkbox" />
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
