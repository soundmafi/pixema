import Input from '../Input/Input';
import {
	StyledButton,
	StyledResetForm,
	StyledTitle,
} from './styles';

const ResetPassword = () => {
	return (
		<StyledResetForm>
			<StyledTitle>Reset Password</StyledTitle>
			<Input inputName="Email" inputType="email" placeholder="Your email" />	
			<StyledButton>Reset</StyledButton>
		</StyledResetForm>
	);
};

export default ResetPassword;
