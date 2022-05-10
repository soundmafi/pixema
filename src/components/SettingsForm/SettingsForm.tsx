import { ISwitch } from '../../types/types';
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

const Settings = ({toggleTheme}:ISwitch) => {
	return (
		<StyledForm>
			<StyledBlockContainer>
				<StyledTitle>Profile</StyledTitle>

				<StyledContainer>
					<Input
						inputName="Name"
						inputType="text"
						value="Artem Lapitsky"
						placeholder="Your Name"
					/>
					<Input
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
					<Input
						inputName="Password"
						inputType="password"
						placeholder="Your password"
					/>
					<StyledPasswordContainer>
						<Input
							inputName="New password"
							inputType="password"
							placeholder="New password"
						/>
						<Input
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
					<div>
						<StyledThemeName>Dark</StyledThemeName>
						<StyledText>Use dark thema</StyledText>
					</div>

					<Switch toggleTheme={toggleTheme}/>
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
