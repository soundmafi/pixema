import Input from '../Input/Input';
import {
	StyledButton,
	StyledSignUpForm,
	StyledText,
	StyledTextSignUp,
	StyledTitle,
} from './styles';

const SignUp = () => {
	return (
		<StyledSignUpForm>
			<StyledTitle>Sign Up</StyledTitle>
			<Input inputName="Name" inputType="text" placeholder="Your Name" />
			<Input inputName="Email" inputType="email" placeholder="Your email" />
			<Input inputName="Password" inputType="password" placeholder="Your pasword" />
			<Input
				inputName="Confirm password"
				inputType="password"
				placeholder="Confirm password"
			/>
			<StyledButton>Sign up</StyledButton>
			<StyledText>
				Already have an account? <StyledTextSignUp>Sign In</StyledTextSignUp>
			</StyledText>
		</StyledSignUpForm>
	);
};

export default SignUp;
