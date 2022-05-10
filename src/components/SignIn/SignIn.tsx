import Input from '../Input/Input';
import {
	StyledButton,
	StyledRestorePasword,
	StyledSignForm,
	StyledText,
	StyledTextSignUp,
	StyledTitle,
} from './styles';

const SignIn = () => {
	return (
		<StyledSignForm>
			<StyledTitle>Sign In</StyledTitle>
			<Input inputName="Email" inputType="email" placeholder="Your email" />
			<Input inputName="Password" inputType="password" placeholder="Your pasword" />
			<StyledRestorePasword>Forgot password?</StyledRestorePasword>
			<StyledButton>Sign in</StyledButton>
			<StyledText>
				Don’t have an account? <StyledTextSignUp>Sign Up</StyledTextSignUp>
			</StyledText>
		</StyledSignForm>
	);
};

export default SignIn;
